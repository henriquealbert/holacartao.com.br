import { useState } from 'react';
import MUTATION_GRAFICA from '../../../graphql/admin/MutationStatus';
import clientAdmin from '../../../graphql/clientAdmin';
import { Formik, Form, Field } from 'formik';
import CardImgs from '../CardImgs';

import * as S from './styled';

export default function SingleOrderGrafica({ data, mutate }) {
  const order = data?.order;

  const [loading, setLoading] = useState(false);

  const handleSubmitGrafica = (dataForm, { resetForm }) => {
    if (dataForm.grafica_pedido === '') {
      return;
    }
    setLoading(true);
    const input = {
      where: {
        id: order?.id
      },
      data: {
        grafica_pedido: dataForm.grafica_pedido
      }
    };
    clientAdmin
      .request(MUTATION_GRAFICA, {
        input
      })
      .then((res) => {
        setLoading(false);
        mutate({
          ...data,
          grafica_pedido: res.updateOrder.order.grafica_pedido
        });
        resetForm();
      })
      .catch(() => {
        return;
      });
  };

  return (
    <S.OrderGrafica>
      <CardImgs data={data} />
      <Formik
        initialValues={{
          grafica_pedido: ''
        }}
        onSubmit={handleSubmitGrafica}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="grafica_pedido"
              id="grafica_pedido"
              placeholder="Nº do Pedido"
            />
            <div>
              <button type="submit">
                {loading ? 'Salvando... ' : 'Salvar ou Editar'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </S.OrderGrafica>
  );
}
