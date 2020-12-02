import client from '@/graphql/client';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import MUTATION_RESET_PASS from '@/graphql/mutations/resetPassword';
import Router from 'next/router';

import * as S from './styled';

export default function FormRecoveryPass({ query }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async ({ code, password, passwordConfirmation }) => {
    setLoading(true);

    try {
      await client.request(MUTATION_RESET_PASS, {
        code: code,
        password: password,
        passwordConfirmation: passwordConfirmation
      });
      setLoading(false);
      Router.push('/login/');
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const validations = Yup.object().shape({
    code: Yup.string().required('O Token é um campo obrigatório.'),
    password: Yup.string()
      .min(8, 'Sua nova senha deve ter no mínimo 8 caracteres.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Sua nova senha deve conter pelo menos uma letra e um número.'
      )
      .required('A nova senha é um campo obrigatório.'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
      .required('A confirmação de senha é um campo obrigatório.')
  });

  return (
    <S.Wrapper>
      <h1>Crie sua nova senha</h1>
      <p>Digite o e-mail atrelado a sua conta para recuperar sua senha.</p>
      <Formik
        initialValues={{
          code: query.code,
          password: '',
          passwordConfirmation: ''
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
                  <small>Token Inválido.</small>
                </span>
              ) : (
                ''
              )}
            </S.Erro>

            <div>
              <Field name="code" type="text" placeholder="Token" />
              <ErrorMessage component="span" name="code" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Nova Senha" />
              <ErrorMessage component="span" name="password" />
            </div>
            <div>
              <Field
                name="passwordConfirmation"
                type="password"
                placeholder="Cofirmar Senha"
              />
              <ErrorMessage component="span" name="passwordConfirmation" />
            </div>

            <S.BtnSubmit type="submit">
              {' '}
              {loading ? 'Carregando... ' : 'Alterar Senha'}
            </S.BtnSubmit>
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  );
}
