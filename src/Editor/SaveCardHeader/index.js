import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import client from '../../graphql/client';

import * as S from './styled';

export default function SaveCardHeader() {
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client.request();
  }, []);

  const handleSubmit = (data) => {
    // setLoading(true);
    console.log(data);
    setDisable(true);
  };

  const handleEdit = () => {
    setDisable(false);
  };

  const validations = Yup.object().shape({
    saved_card: Yup.string().required('Este campo é obrigatório.')
  });

  return (
    <Formik
      initialValues={{
        saved_card: ''
      }}
      validationSchema={validations}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <S.SaveMenuHeader>
            <S.SavedCardNameHeader>
              <Field
                name="saved_card"
                id="saved_card"
                type="text"
                placeholder="Nome do Cartão*"
                disabled={disable}
                className={disable === true ? 'disable' : ''}
              />
              <label htmlFor="saved_card">
                <S.EditSavedCardIcon onClick={handleEdit} />
              </label>
            </S.SavedCardNameHeader>
            <button type="submit" disabled={disable}>
              {loading ? 'Salvando... ' : 'Salvar'}
            </button>
            <ErrorMessage component="span" name="saved_card" />
          </S.SaveMenuHeader>
        </Form>
      )}
    </Formik>
  );
}
