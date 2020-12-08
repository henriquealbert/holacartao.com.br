import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Router from 'next/router';
import { nanoid } from 'nanoid';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

import { useFetchAdmin } from '@/hooks/useFetchAdmin';
import GET_ALL_CARD_CATEGORIES from '@/graphql/admin/GetAllCardCategories';
import clientAdmin from '@/graphql/clientAdmin';
import MUTATION_CREATE_CARD_MODEL from '@/graphql/admin/MutationCreateCardModel';
import { useEditorStoreFrente } from '../../../Frente/Store';
import { useEditorStoreVerso } from '../../../Verso/Store';

export default function FormCardModelAdd({ onClose }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Get Select Options
  const { data: allCardCategories } = useFetchAdmin(GET_ALL_CARD_CATEGORIES);

  // Get Stores to save
  const { store: frenteStore } = useEditorStoreFrente();
  const { store: versoStore } = useEditorStoreVerso();

  // Mutation
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (dataForm, { resetForm }) => {
    if (!dataForm.card_category) {
      return;
    }
    if (!dataForm.example_image) {
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append('files', dataForm.example_image);

    const upload_res = await axios({
      method: 'POST',
      url: `${API_URL}/upload`,
      data
    });

    if (upload_res.data[0].id) {
      const input = {
        data: {
          title: dataForm.title,
          example_image: upload_res.data[0].id,
          card_category: dataForm.card_category,
          frontal_card: JSON.stringify(frenteStore),
          back_card: JSON.stringify(versoStore),
          slug: String(nanoid())
        }
      };
      console.log('input', input);
      const res = await clientAdmin.request(MUTATION_CREATE_CARD_MODEL, {
        input
      });
      if (res) {
        resetForm();
        setLoading(false);
        Router.push('/admin/card-models/');
      }
    }
  };

  return (
    <Formik
      initialValues={{
        title: '',
        example_image: '',
        card_category: '',
        frontal_card: '',
        back_card: ''
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form
          style={{
            width: '100%'
          }}
        >
          <Flex justifyContent="space-between">
            <FormControl maxW="250px">
              <FormLabel htmlFor="title">Nome do Modelo:</FormLabel>
              <Field type="text" name="title" id="title" required>
                {({ field }) => (
                  <Input {...field} placeholder="Ex: Advogado Premium" />
                )}
              </Field>
            </FormControl>
            <FormControl maxW="250px">
              <FormLabel htmlFor="example_image">Imagem de Exemplo:</FormLabel>
              <input
                type="file"
                name="example_image"
                id="example_image"
                onChange={(e) =>
                  setFieldValue('example_image', e.target.files[0])
                }
                required
              />
            </FormControl>
            <FormControl maxW="250px">
              <FormLabel htmlFor="card_category">
                Categoria do Modelo:
              </FormLabel>
              <Select
                name="card_category"
                id="card_category"
                isRequired
                placeholder="Selecione uma opção..."
                onChange={(e) => setFieldValue('card_category', e.target.value)}
              >
                {allCardCategories?.cardCategories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Flex>
          <Flex justifyContent="space-between" mt="3rem">
            <Button
              variant="link"
              onClick={onClose}
              color="gray.900"
              fontWeight="bold"
            >
              <Icon as={ChevronLeftIcon} w={6} h={6} /> Voltar
            </Button>
            <Button
              variant="primary"
              type="submit"
              isLoading={loading}
              loadingText="Salvando..."
            >
              Salvar Modelo
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
