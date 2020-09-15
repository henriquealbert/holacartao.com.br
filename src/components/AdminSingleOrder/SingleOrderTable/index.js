import {
  formatCEP,
  formatPrice,
  formatCPF,
  formatPayment,
  formatPhone
} from '../../../utils/format';

import * as S from './styled';

export default function SingleOrderTable({ order }) {
  return (
    <S.OrderTable>
      <tbody>
        <tr>
          <td>Nome:</td>
          <td>
            {order?.address.name} {order?.address.last_name}
          </td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>{order?.user.email}</td>
        </tr>
        <tr>
          <td>Telefone:</td>
          <td>{formatPhone(order?.address.telefone)}</td>
        </tr>
        <tr>
          <td>CPF:</td>
          <td>{formatCPF(order?.address.cpf)}</td>
        </tr>
        <tr>
          <td>Quantidade:</td>
          <td>{order?.quantidade} cartões</td>
        </tr>
        <tr>
          <td>Valor Pago:</td>
          <td>{formatPrice(order?.preco)}</td>
        </tr>
        <tr>
          <td>Forma de Pagamento:</td>
          <td>{formatPayment(order?.metodo_pagamento)}</td>
        </tr>
        <tr>
          <td>Endereço:</td>
          <td>
            {order?.address.logradouro} - <strong>nº</strong>{' '}
            {order?.address.numero} - <strong>Bairro</strong>{' '}
            {order?.address.bairro}
          </td>
        </tr>
        <tr>
          <td>Cidade e Estado:</td>
          <td>
            {order?.address.cidade} - {order?.address.estado}
          </td>
        </tr>
        <tr>
          <td>CEP:</td>
          <td>{formatCEP(order?.address.cep)}</td>
        </tr>
        <tr>
          <td>Complemento:</td>
          <td>{order?.address.complemento}</td>
        </tr>

        <tr>
          <td>Referência:</td>
          <td>{order?.address.referencia}</td>
        </tr>

        <tr>
          <td style={{ border: 'none' }}>Pedido na Gráfica:</td>
          <td style={{ border: 'none' }}>
            <a
              href={`https://google.com?pedido=${order?.grafica_pedido}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver Pedido na Gráfica"
            >
              Ver na Gráfica pedido nº: {order?.grafica_pedido}
            </a>
          </td>
        </tr>
      </tbody>
    </S.OrderTable>
  );
}
