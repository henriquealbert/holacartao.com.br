// Utils
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '@/lib/auth';
import AppContext from '@/Contexts/AppContext';

// Components
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { occupations } from './utils/occupations';
import { validations } from './utils/validations';

// Styles
import * as S from './styled';

export default function FormCreate() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const handleSubmit = (data, { setErrors }) => {
    setLoading(true);

    registerUser(
      data.username,
      data.email,
      data.password,
      data.occupation,
      data.terms
    )
      .then((res) => {
        setLoading(false);
        // set authed User in global context to update header/app state
        setUser(res.data.user);
        router.push('/minha-conta');
      })
      .catch((error) => {
        setErrors(error.response.data.message[0].messages[0]);
        setLoading(false);
      });
  };

  return (
    <S.Wrapper>
      <h1>Crie sua conta</h1>
      <p>
        já tem uma conta?{' '}
        <Link href="/login">
          <a>clique aqui</a>
        </Link>
      </p>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          occupation: '',
          terms: false
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        {({ errors }) => (
          <Form>
            <S.ErroNoLoginCreate>
              {errors.message === 'Email is already taken.' ? (
                <span>
                  <strong>Erro ao tentar criar sua Conta.</strong>
                  <small>
                    Já existe um usuário cadastrado com este e-mail.
                  </small>
                </span>
              ) : errors.message === 'Username already taken' ? (
                <span>
                  <strong>Erro ao tentar criar sua Conta.</strong>
                  <small>Este nome de usuário não está disponível.</small>
                </span>
              ) : (
                ''
              )}
            </S.ErroNoLoginCreate>

            <Field name="username" type="text" placeholder="Nome de Usuário" />
            <ErrorMessage component="span" name="username" />

            <Field name="email" type="email" placeholder="E-mail" />
            <ErrorMessage component="span" name="email" />

            <Field name="password" type="password" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />

            <Field
              name="occupation"
              type="text"
              placeholder="Área de Atuação"
              as="select"
            >
              <option value={''} className="first-option">
                Selecione uma ocupação...
              </option>
              {occupations.map((occupation) => {
                return (
                  <option key={occupation} value={occupation}>
                    {occupation}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage component="span" name="occupation" />
            <S.TermsWrapper>
              <Field name="terms" type="checkbox" placeholder="Senha" />
              <p>
                Li e aceito os{' '}
                <Link href="/politica-privacidade">
                  <a>Termos de Uso</a>
                </Link>
              </p>
            </S.TermsWrapper>
            <ErrorMessage component="span" name="terms" />

            <S.BtnSubmit type="submit">
              {loading ? 'Carregando... ' : 'Criar minha Conta'}
            </S.BtnSubmit>
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  );
}
