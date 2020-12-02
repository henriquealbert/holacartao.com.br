import client from '@/graphql/client';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import MUTATION_FORGOT_PASS from '@/graphql/mutations/forgotPassword';

import * as S from './styled';

export default function FormLostPass() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ email }) => {
    setLoading(true);

    try {
      await client.request(MUTATION_FORGOT_PASS, {
        email: email
      });
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const validations = Yup.object().shape({
    email: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('O e-mail é um campo obrigatório.')
  });

  if (success) {
    return (
      <S.Wrapper>
        <p>Acesse seu e-mail para Recuperar sua Conta!</p>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <h1>Esqueceu sua senha?</h1>
      <p>Digite o e-mail atrelado a sua conta para recuperar sua senha.</p>
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <S.Erro>
              {error ? (
                <span>
                  <strong>Erro ao realizar sua solicitação.</strong>
                  <small>Este E-mail não existe em nossa base de dados.</small>
                </span>
              ) : (
                ''
              )}
            </S.Erro>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage component="span" name="email" />
            </div>
            <S.BtnSubmit type="submit">
              {' '}
              {loading ? 'Carregando... ' : 'Recuperar Conta'}
            </S.BtnSubmit>
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  );
}
