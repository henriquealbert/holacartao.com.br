import Link from 'next/link';
import { useFetchAdmin } from '../../hooks/useFetchAdmin';
import GET_SINGLE_ORDER from '../../graphql/admin/GetSingleOrder';

import SingleOrderHeader from './SingleOrderHeader';
import SingleOrderGrafica from './SingleOrderGrafica';
import SingleOrderTable from './SingleOrderTable';
import SingleOrderObservations from './SingleOrderObservations';
import SingleOrderObsHistory from './SingleOrderObsHistory';

import * as S from './styled';

export default function AdminSingleOrder({ initialData }) {
  const { data, error, mutate } = useFetchAdmin(GET_SINGLE_ORDER, {
    id: initialData.order.id
  });
  const order = data?.order;

  if (error) {
    return (
      <S.OrderContainer>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.OrderContainer>
    );
  }
  return (
    <S.OrderContainer>
      <Link href="/admin/dashboard">
        <a>
          <S.BackButton>
            <S.ArrowBackIcon /> Voltar
          </S.BackButton>
        </a>
      </Link>
      <S.OrderContent>
        <SingleOrderHeader
          data={data}
          initialData={initialData}
          mutate={mutate}
        />

        <S.OrderClientData>
          <SingleOrderGrafica data={data} mutate={mutate} />
          <SingleOrderTable order={order} />
        </S.OrderClientData>

        <SingleOrderObservations data={data} mutate={mutate} />

        <SingleOrderObsHistory order={order} />
      </S.OrderContent>
    </S.OrderContainer>
  );
}
