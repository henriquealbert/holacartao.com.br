// Utils
import {
  formatDateHour,
  formatStatus,
  formatPayment,
  formatCPF,
  formatCEP,
  formatPhone,
  formatPrice
} from '@/utils/format';

// Styles
import * as S from './styled';

export default function MyAccOrdersID({ data }) {
  if (data.errors) {
    return (
      <S.MyAccOrdersID>
        <h2>Meus pedidos</h2>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.MyAccOrdersID>
    );
  }

  if (data !== null) {
    const order = data?.order;
    return (
      <S.MyAccOrdersID>
        <h2>
          Detalhes do pedido <strong>#2020{order.id}</strong>
        </h2>

        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.quantidade} Cartões</td>
              <td>{formatPrice(order.preco)}</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <td>Método de pagamento:</td>
              <td>{formatPayment(order.metodo_pagamento)}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>R$ {String(order.preco).replace('.', ',')}0</td>
            </tr>
          </tbody>
        </table>
        <S.OrderDetails>
          <p>
            O pedido <strong>#2020{order.id}</strong> foi realizado em{' '}
            <b>{formatDateHour(order.created_at)}</b> e atualmente está{' '}
            <S.StatusColor status={order.status}>
              {formatStatus(order.status)}
            </S.StatusColor>
          </p>
        </S.OrderDetails>
        <div>
          <h2>Endereço de Entrega</h2>
          <S.Address>
            <li>
              Nome Completo:
              <span>
                {order.address?.name} {order.address?.last_name}
              </span>
            </li>
            <li>
              CPF:
              <span>{formatCPF(order.address?.cpf)}</span>
            </li>
            <li>
              CEP: <span>{formatCEP(order.address?.cep)}</span>
            </li>
            <li>
              Telefone:<span>{formatPhone(order.address?.telefone)}</span>
            </li>
            <li>
              Logradouro:<span>{order.address?.logradouro}</span>
            </li>
            <li>
              Número:<span>{order.address?.numero}</span>
            </li>
            <li>
              Complemento:<span>{order.address?.complemento}</span>
            </li>
            <li>
              Referência:<span>{order.address?.referencia}</span>
            </li>
            <li>
              Bairro:<span>{order.address?.bairro}</span>
            </li>
            <li>
              Cidade:<span>{order.address?.cidade}</span>
            </li>
            <li>
              Estado:<span>{order.address?.estado}</span>
            </li>
            <li>
              E-mail:
              <span>{order.user.email}</span>
            </li>
          </S.Address>
        </div>
      </S.MyAccOrdersID>
    );
  }
  return (
    <S.MyAccOrdersID>
      <h2>Meus pedidos</h2>
      <div>
        <p>Carregando...</p>
      </div>
    </S.MyAccOrdersID>
  );
}
