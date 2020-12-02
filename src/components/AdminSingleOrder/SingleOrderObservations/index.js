import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import clientAdmin from '@/graphql/clientAdmin';
import MUTATION_SAVE_OBS from '@/graphql/admin/MutationObs';

import * as S from './styled';

export default function SingleOrderObservations({ data, mutate }) {
  const order = data?.order;

  const [loading, setLoading] = useState(false);

  const handleSubmitObs = (dataForm, { resetForm }) => {
    if (dataForm.description === '') {
      return;
    }
    setLoading(true);
    const input = {
      data: {
        description: dataForm.description,
        order: order?.id
      }
    };
    clientAdmin
      .request(MUTATION_SAVE_OBS, {
        input
      })
      .then((res) => {
        setLoading(false);
        mutate({ ...data, observations: res.createObservation });
        resetForm();
      })
      .catch(() => {
        return;
      });
  };
  return (
    <S.OrderObservations>
      <h3>Observações:</h3>
      <Formik
        initialValues={{
          description: ''
        }}
        onSubmit={handleSubmitObs}
      >
        {() => (
          <Form>
            <Field
              name="description"
              id="description"
              cols="30"
              rows="3"
              type="textarea"
              as="textarea"
            ></Field>
            <button type="submit">{loading ? 'Salvando... ' : 'Salvar'}</button>
          </Form>
        )}
      </Formik>
    </S.OrderObservations>
  );
}
