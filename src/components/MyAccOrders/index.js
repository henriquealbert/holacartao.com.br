// Utils
import Link from 'next/link';
import { formatDate, formatStatus, formatPrice } from '../../utils/format';

// API
import { useFetch } from '../../hooks/useFetch';
import GET_ME from '../../graphql/queries/GetMe';
import GET_ORDERS from '../../graphql/queries/GetOrders';

// Styles
import * as S from './styled';

export default function MyAccOrders({ initialData }) {
  // Get User ID
  const { data: user, error } = useFetch(GET_ME, {
    initialData: initialData.user
  });

  const userID = user !== undefined ? user.me.id : -1;
  // Get Order Data passing the User Id to the query
  const { data: pedidos, error: ordersError } = useFetch(
    () => GET_ORDERS,
    {
      id: userID
    },
    { initialData: initialData.orders }
  );

  if (error || ordersError || user?.error || pedidos?.error) {
    return (
      <S.MyAccOrders>
        <h2>Meus pedidos</h2>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.MyAccOrders>
    );
  }

  if (pedidos !== null) {
    const orders = pedidos?.user?.orders;
    return (
      <S.MyAccOrders>
        <h2>Meus pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Status</th>
              <th>Total</th>
              <th>Quantidade</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              return (
                <tr key={order.id}>
                  <td className="order-number">#2020{order.id}</td>
                  <td>{formatDate(order.created_at)}</td>
                  <S.StatusColor status={order.status}>
                    <span>{formatStatus(order.status)}</span>
                  </S.StatusColor>
                  <td>{formatPrice(order.preco)}</td>
                  <td>{order.quantidade} Cartões</td>
                  <td>
                    <Link
                      href="/minha-conta/pedidos/[id]"
                      as={`/minha-conta/pedidos/2020${order.id}`}
                    >
                      <a>Visualizar</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </S.MyAccOrders>
    );
  }

  return (
    <S.MyAccOrders>
      <h2>Meus pedidos</h2>
      <div>
        <p>Carregando...</p>
      </div>
    </S.MyAccOrders>
  );
}
