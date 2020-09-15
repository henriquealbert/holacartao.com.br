import { useState } from 'react';
import MUTATION_CHANGE_STATUS from '../../../graphql/admin/MutationStatus';
import clientAdmin from '../../../graphql/clientAdmin';

import { formatDateHour } from '../../../utils/format';

import * as S from './styled';

const optionsStatus = [
  { value: 'analise', label: 'Análise Financeira' },
  { value: 'producao', label: 'Em Produção' },
  { value: 'transporte', label: 'Em Transporte' },
  { value: 'erro', label: 'Com Erros' },
  { value: 'entregue', label: 'Entregue' },
  { value: 'estorno', label: 'Estorno' },
  { value: 'cancelado', label: 'Cancelado' }
];

export default function SingleOrderHeader({ data, initialData, mutate }) {
  const order = data?.order;

  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialData.order.status
  );

  const changeStatus = (e) => {
    e.preventDefault();
    setLoading(true);
    const input = {
      where: { id: order?.id },
      data: {
        status: selectedOption
      }
    };
    clientAdmin
      .request(MUTATION_CHANGE_STATUS, { input })
      .then((res) => {
        setLoading(false);
        mutate({
          ...data,
          status: res.updateOrder.order.status
        });
      })
      .catch(() => {
        return;
      });
  };

  return (
    <S.OrderHeader color={order?.status}>
      <S.StatusAndUpdated color={order?.status}>
        <span>#2020{order?.id}</span>
        <p>Última atualização {formatDateHour(order?.updated_at)}</p>
      </S.StatusAndUpdated>
      <S.ChangeStatus onSubmit={changeStatus} color={order?.status}>
        <select
          name="status"
          id="status"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {optionsStatus.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        <button type="submit">
          {loading ? 'Salvando... ' : 'Salvar Status'}
        </button>
      </S.ChangeStatus>
    </S.OrderHeader>
  );
}
