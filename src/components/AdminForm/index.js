// Utils
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { adminLogin } from '@/lib/authAdmin';
import AdminContext from '@/Contexts/AdminContext';

// Components
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Styles
import * as S from './styled';

export default function AdminForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const adminContext = useContext(AdminContext);

  useEffect(() => {
    if (adminContext.isAdminAuth) {
      router.push('/admin/dashboard');
    }
  }, [router, adminContext.isAdminAuth]);

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
    adminLogin(data.identifier, data.password)
      .then((res) => {
        setLoading(false);
        // set authed User in global context to update header/app state
        adminContext.setAdmin(res.data.user);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <S.Wrapper>
      <div>
        <h1>Admin Login</h1>
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
              <S.ErroNoLoginAdmin>
                {error ? (
                  <span>
                    <strong>Erro ao realizar seu login.</strong>
                    <small>E-mail ou senha inválidos, tente novamente.</small>
                  </span>
                ) : (
                  ''
                )}
              </S.ErroNoLoginAdmin>

              <div>
                <Field name="identifier" type="email" placeholder="E-mail" />
                <ErrorMessage component="span" name="identifier" />
              </div>
              <div>
                <Field name="password" type="password" placeholder="Senha" />
                <ErrorMessage component="span" name="password" />
              </div>
              <S.BtnSubmit type="submit">
                {loading ? 'Loading... ' : 'Fazer Login'}
              </S.BtnSubmit>
            </Form>
          )}
        </Formik>
      </div>
    </S.Wrapper>
  );
}
