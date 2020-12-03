import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Flex, Icon, Box } from '@chakra-ui/react';

import client from '@/graphql/client';
import MUTATION_CREATE_SAVED_CARD from '@/graphql/mutations/createSavedCard';
import MUTATION_UPDATE_SAVED_CARD from '@/graphql/mutations/updateSavedCard';
import { useEditorStoreFrente } from '@/Editor/Frente/Store';
import { useEditorStoreVerso } from '@/Editor/Verso/Store';
import { useEditorUtilsContext } from '@/Editor/Context/EditorUtilsContext';
import { useAppContext } from '@/Contexts/AppContext';

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
        title: saveCardHeader?.title || '',
        frontal_card: '',
        back_card: '',
        slug: ''
      }}
      enableReinitialize
      validationSchema={validations}
      onSubmit={handleSubmit}
    >
      {({ handleBlur }) => (
        <Form>
          <Flex>
            <Box>
              <Input
                name="title"
                id="title"
                type="text"
                placeholder="Ex. Modelo Sem Título"
                isDisabled={disable}
                required
                onBlur={handleBlur}
                maxW="200px"
                borderRadius="30px"
                display="block"
                mr="2rem"
              />
              <ErrorMessage
                component="span"
                name="title"
                style={{ color: 'red', fontSize: '12px', marginLeft: '2rem' }}
              />
            </Box>
            <S.ActionButton type="submit">
              <Icon viewBox="0 0 27 27" w={7} h={7}>
                <path
                  d="M5.417 22.75h15.166c1.196 0 2.167-.97 2.167-2.167V8.667L17.333 3.25H5.417c-1.196 0-2.167.97-2.167 2.167v15.166c0 1.196.97 2.167 2.167 2.167zM7.583 5.417h4.334v2.166h2.166V5.417h2.167V9.75H7.583V5.417zm0 8.666h10.834v6.5H7.583v-6.5z"
                  fill="currentColor"
                />
              </Icon>
              {loading ? 'Salvando... ' : 'Salvar'}
            </S.ActionButton>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
