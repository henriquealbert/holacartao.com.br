import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { useFetchAdmin } from '../../../../hooks/useFetchAdmin';
import GET_ALL_CARD_CATEGORIES from '../../../../graphql/admin/GetAllCardCategories';
import clientAdmin from '../../../../graphql/clientAdmin';
import MUTATION_CREATE_CARD_MODEL from '../../../../graphql/admin/MutationCreateCardModel';

import axios from 'axios';
import Router from 'next/router';
import { nanoid } from 'nanoid';

import { useEditorStoreFrente } from '../../../Frente/Store';
import { useEditorStoreVerso } from '../../../Verso/Store';
import { useEditorUtilsContext } from '../../../Context/EditorUtilsContext';

import * as S from './styled';

export default function FormCardModelAdd() {
  const { closeModal } = useEditorUtilsContext();
  // Get Select Options
  const { data } = useFetchAdmin(GET_ALL_CARD_CATEGORIES);
  // Get Stores to save
  const { store: frenteStore } = useEditorStoreFrente();
  const { store: versoStore } = useEditorStoreVerso();

  // Mutation
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (dataForm, { resetForm }) => {
    if (dataForm.card_category === '0') {
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append('files', dataForm.example_image);

    const upload_res = await axios({
      method: 'POST',
      url: 'http://localhost:1337/upload',
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
      const res = await clientAdmin.request(MUTATION_CREATE_CARD_MODEL, {
        input
      });
      if (res) {
        setLoading(false);
        resetForm();
        Router.push('/admin/card-models');
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
        <Form>
          <S.FormSave>
            <S.FieldItem>
              <label htmlFor="title">Nome do Modelo:</label>
              <Field
                type="text"
                name="title"
                id="title"
                placeholder="Ex: Advogado Premium"
              />
            </S.FieldItem>
            <S.FieldItem>
              <label htmlFor="example_image">Imagem de Exemplo:</label>
              <input
                type="file"
                name="example_image"
                id="example_image"
                onChange={(e) =>
                  setFieldValue('example_image', e.target.files[0])
                }
              />
            </S.FieldItem>
            <S.FieldItem>
              <label htmlFor="card_category">Categoria do Modelo:</label>
              <Field as="select" name="card_category" id="card_category">
                <option value="0">Selecione uma opção...</option>
                {data?.cardCategories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </Field>
            </S.FieldItem>
          </S.FormSave>

          <S.BtnsForm>
            <S.ButtonBack onClick={closeModal}>
              Voltar para a Edição
            </S.ButtonBack>
            <S.BtnSave type="submit">
              {loading ? 'Salvando... ' : 'Salvar Modelo'}
            </S.BtnSave>
          </S.BtnsForm>
        </Form>
      )}
    </Formik>
  );
}
