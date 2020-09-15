import { useState, useContext } from 'react';
import client from '../../graphql/client';
import changePass from '../../graphql/mutations/changePass';
import { logout } from '../../lib/auth';
import AppContext from '../../Contexts/AppContext';

import * as S from './styled';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function MyAccDataEdit() {
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await client.request(changePass, {
        id: user?.id,
        newPassword: data.newPassword
      });
      setLoading(false);
      logout();
      setUser(null);
    } catch {
      (errors) => {
        setError(errors.message);
        setLoading(false);
      };
    }
  };

  const validations = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
      .required('A senha é um campo obrigatório.'),
    confirmNewPassword: Yup.mixed().test(
      'match',
      'As senhas não conferem', // your error message
      function () {
        return this.parent.newPassword === this.parent.confirmNewPassword;
      }
    )
  });

  return (
    <S.MyAccDataEditWrapper>
      <h2>Alteração de senha</h2>
      <div>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: ''
          }}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              {error ? (
                <span>
                  <strong>Erro ao tentar alterar sua senha.</strong>
                  <small>Por favor, tente novamente.</small>
                </span>
              ) : (
                ''
              )}

              <div>
                <label htmlFor="newPassword">
                  Nova senha (deixe em branco para não alterar):
                </label>
                <Field
                  name="newPassword"
                  id="newPassword"
                  type="password"
                  placeholder="Nova senha"
                />
                <ErrorMessage component="span" name="newPassword" />
              </div>
              <label htmlFor="confirmNewPassword">Confirmar nova senha:</label>
              <div>
                <Field
                  name="confirmNewPassword"
                  id="confirmNewPassword"
                  type="password"
                  placeholder="Confirmar nova senha"
                />
                <ErrorMessage component="span" name="confirmNewPassword" />
              </div>
              <S.SolidBtn type="submit">
                {loading ? 'Carregando... ' : 'Salvar alterações'}
              </S.SolidBtn>
            </Form>
          )}
        </Formik>
      </div>
    </S.MyAccDataEditWrapper>
  );
}
