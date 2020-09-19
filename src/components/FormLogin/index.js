// Utils
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { login } from '../../lib/auth';
import AppContext from '../../Contexts/AppContext';

// Components
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Styles
import * as S from './styled';

export default function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const appContext = useContext(AppContext);

  const validations = Yup.object().shape({
    identifier: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('O e-mail é um campo obrigatório.'),
    password: Yup.string()
      .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
      .required('A senha é um campo obrigatório.')
  });

  const handleSubmit = (data) => {
    setLoading(true);
    login(data.identifier, data.password)
      .then((res) => {
        setLoading(false);
        // set authed User in global context to update header/app state
        appContext.setUser(res.data.user);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <S.Wrapper>
      <h1>bem-vindo de novo!</h1>
      <S.NaoPossui>
        ainda não possui uma conta?{' '}
        <Link href="/criar-conta/">
          <a>clique aqui</a>
        </Link>
      </S.NaoPossui>
      <Formik
        initialValues={{
          identifier: '',
          password: ''
        }}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <S.ErroNoLogin>
              {error ? (
                <span>
                  <strong>Erro ao realizar seu login.</strong>
                  <small>E-mail ou senha inválidos, tente novamente.</small>
                </span>
              ) : (
                ''
              )}
            </S.ErroNoLogin>

            <div>
              <Field name="identifier" type="email" placeholder="E-mail" />
              <ErrorMessage component="span" name="identifier" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Senha" />
              <ErrorMessage component="span" name="password" />
            </div>
            <S.BtnSubmit type="submit">
              {loading ? 'Carregando... ' : 'Fazer Login'}
            </S.BtnSubmit>
          </Form>
        )}
      </Formik>

      <p>
        esqueceu sua senha?{' '}
        <Link href="/esqueceu-senha/">
          <a>clique aqui</a>
        </Link>
      </p>
    </S.Wrapper>
  );
}
