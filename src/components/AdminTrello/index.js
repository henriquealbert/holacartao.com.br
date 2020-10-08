import Link from 'next/link';

import * as S from './styled';
import { useFetchAdmin } from '../../hooks/useFetchAdmin';
import GET_ALL_ORDERS from '../../graphql/admin/GetAllOrders';

export default function AdminTrello({ initialData }) {
  const { data, error } = useFetchAdmin(GET_ALL_ORDERS, null, {
    initialData,
    revalidateOnMount: true
  });

  const incompletos = data?.orders.filter(
    (pedido) => pedido.status === 'incompleto'
  );
  const analises = data?.orders.filter((pedido) => pedido.status === 'analise');
  const producoes = data?.orders.filter(
    (pedido) => pedido.status === 'producao'
  );
  const transportes = data?.orders.filter(
    (pedido) => pedido.status === 'transporte'
  );
  const comErros = data?.orders.filter((pedido) => pedido.status === 'erro');
  const entregues = data?.orders.filter(
    (pedido) => pedido.status === 'entregue'
  );
  const estornos = data?.orders.filter((pedido) => pedido.status === 'estorno');
  const cancelados = data?.orders.filter(
    (pedido) => pedido.status === 'cancelado'
  );
  const estornosEcancelados = estornos?.concat(cancelados);

  if (error) {
    return (
      <S.TrelloContainer>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.TrelloContainer>
    );
  }

  return (
    <S.TrelloContainer>
      <S.Card>
        <h2>Incompleto</h2>

        {incompletos?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card>
        <h2>Análise Financeira</h2>

        {analises?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card>
        <h2>Produção</h2>
        {producoes?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card>
        <h2>Transporte</h2>
        {transportes?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card>
        <h2>Com Erros</h2>
        {comErros?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card>
        <h2>Entregues</h2>
        {entregues?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
      <S.Card style={{ marginRight: '0' }}>
        <h2>Estorno/Cancel.</h2>
        {estornosEcancelados?.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/admin/dashboard/[id]"
                as={`/admin/dashboard/2020${item.id}`}
              >
                <S.Pedido color={item.status}>
                  <a>#2020{item.id}</a>
                  <span>+</span>
                </S.Pedido>
              </Link>
            </div>
          );
        })}
      </S.Card>
    </S.TrelloContainer>
  );
}
