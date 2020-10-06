import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import client from '../../../graphql/client';
import MUTATION_CREATE_SAVED_CARD from '../../../graphql/mutations/createSavedCard';
import MUTATION_UPDATE_SAVED_CARD from '../../../graphql/mutations/updateSavedCard';
import { useEditorStoreFrente } from '../../Frente/Store';
import { useEditorStoreVerso } from '../../Verso/Store';
import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';
import { useAppContext } from '../../../Contexts/AppContext';

import * as S from './styled';

export default function SaveCardHeader() {
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const { store: frenteStore } = useEditorStoreFrente();
  const { store: versoStore } = useEditorStoreVerso();
  const { saveCardHeader, setSaveCardHeader } = useEditorUtilsContext();
  const { user } = useAppContext();

  useEffect(() => {
    if (saveCardHeader) {
      setDisable(true);
    }
  }, [saveCardHeader]);

  const handleSubmit = async (dataForm) => {
    if (dataForm.title === '') {
      return;
    }
    setLoading(true);
    if (!saveCardHeader) {
      const input = {
        data: {
          title: dataForm.title,
          front_card: JSON.stringify(frenteStore),
          back_card: JSON.stringify(versoStore),
          slug: String(nanoid()),
          user: user.id
        }
      };
      const res = await client.request(MUTATION_CREATE_SAVED_CARD, {
        input
      });
      if (res) {
        setSaveCardHeader(res);
        setLoading(false);
        setDisable(true);
      }
    }
    if (saveCardHeader) {
      const input = {
        where: {
          id: saveCardHeader.id
        },
        data: {
          front_card: JSON.stringify(frenteStore),
          back_card: JSON.stringify(versoStore)
        }
      };
      const res = await client.request(MUTATION_UPDATE_SAVED_CARD, {
        input
      });
      if (res) {
        setLoading(false);
      }
    }
  };

  const validations = Yup.object().shape({
    title: Yup.string().required('Este campo é obrigatório.')
  });

  return (
    <Formik
      initialValues={{
        title: saveCardHeader?.title,
        frontal_card: '',
        back_card: '',
        slug: ''
      }}
      enableReinitialize
      validationSchema={validations}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <S.SaveMenuHeader>
            <S.SavedCardNameHeader>
              <Field
                name="title"
                id="title"
                type="text"
                placeholder="Nome do Cartão*"
                disabled={disable}
                className={disable === true ? 'disable' : ''}
              />
            </S.SavedCardNameHeader>
            <button type="submit">{loading ? 'Salvando... ' : 'Salvar'}</button>
            <ErrorMessage component="span" name="title" />
          </S.SaveMenuHeader>
        </Form>
      )}
    </Formik>
  );
}
