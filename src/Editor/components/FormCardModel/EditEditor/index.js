import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { useFetchAdmin } from '../../../../hooks/useFetchAdmin';
import GET_ALL_CARD_CATEGORIES from '../../../../graphql/admin/GetAllCardCategories';
import clientAdmin from '../../../../graphql/clientAdmin';
import MUTATION_UPDATE_CARD_MODEL from '../../../../graphql/admin/MutationUpdateCardModel';

import axios from 'axios';
import Router from 'next/router';

import { useEditorStoreFrente } from '../../../Frente/Store';
import { useEditorStoreVerso } from '../../../Verso/Store';
import { useEditorUtilsContext } from '../../../Context/EditorUtilsContext';

import * as S from './styled';

export default function FormCardModelEdit({ infoCard }) {
  const { closeModal, setFrente, setIsOpen } = useEditorUtilsContext();
  // Get Select Options
  const { data: allCardCategories } = useFetchAdmin(GET_ALL_CARD_CATEGORIES);

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
    if (dataForm.example_image !== '') {
      const data = new FormData();
      data.append('files', dataForm.example_image);

      const upload_res = await axios({
        method: 'POST',
        url: 'http://localhost:1337/upload',
        data
      });
      const input = {
        where: {
          id: infoCard.cardModel.id
        },
        data: {
          title: dataForm.title,
          example_image: upload_res.data[0].id,
          card_category: dataForm.card_category,
          frontal_card: JSON.stringify(frenteStore),
          back_card: JSON.stringify(versoStore)
        }
      };
      const res = await clientAdmin.request(MUTATION_UPDATE_CARD_MODEL, {
        input
      });
      if (res) {
        resetForm();
        setFrente(true);
        setIsOpen(false);
        Router.push('/admin/card-models');
        setLoading(false);
      }
    }

    const input = {
      where: {
        id: infoCard.cardModel.id
      },
      data: {
        title: dataForm.title,
        card_category: dataForm.card_category,
        frontal_card: JSON.stringify(frenteStore),
        back_card: JSON.stringify(versoStore)
      }
    };
    const res = await clientAdmin.request(MUTATION_UPDATE_CARD_MODEL, {
      input
    });
    if (res) {
      resetForm();
      setFrente(true);
      setIsOpen(false);
      Router.push('/admin/card-models');
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        title: infoCard.cardModel.title,
        example_image: '',
        card_category: infoCard.cardModel.card_category.id,
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
              <div>
                <label htmlFor="example_image">Imagem de Exemplo:</label>
                <input
                  type="file"
                  name="example_image"
                  id="example_image"
                  onChange={(e) =>
                    setFieldValue('example_image', e.target.files[0])
                  }
                />
              </div>
            </S.FieldItem>
            <S.FieldImgItem>
              <label>Imagem já carregada:</label>
              <img
                src={`http://127.0.0.1:1337${infoCard.cardModel.example_image?.url}`}
                alt="Example Image"
              />
            </S.FieldImgItem>
            <S.FieldItem>
              <label htmlFor="card_category">Categoria do Modelo:</label>
              <Field as="select" name="card_category" id="card_category">
                <option value="0">Selecione uma opção...</option>
                {allCardCategories?.cardCategories.map((category) => {
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
