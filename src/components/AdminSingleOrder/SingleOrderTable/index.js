import {
  formatPrice,
  formatPayment,
  formatPhone,
  formatDateHour
} from '@/utils/format';

import Link from 'next/link';

import * as S from './styled';

export default function SingleOrderTable({ order }) {
  console.log(order);
  return (
    <S.OrderTable>
      <tbody>
        <tr>
          <td>Nome:</td>
          <td>
            {order?.address?.firstName} {order?.address?.lastName}
          </td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>{order?.address?.email}</td>
        </tr>
        <tr>
          <td>Telefone:</td>
          <td>
            {formatPhone(
              order?.address?.areaCode + order?.address?.phoneNumber
            )}
          </td>
        </tr>
        <tr>
          <td>{order?.docType}:</td>
          <td>{order?.docNumber}</td>
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
            {order?.address?.logradouro} - <strong>nº</strong>{' '}
            {order?.address?.streetNumber} - <strong>Bairro</strong>{' '}
            {order?.address?.bairro}
          </td>
        </tr>
        <tr>
          <td>Cidade e Estado:</td>
          <td>{order?.address?.cidadeEstado}</td>
        </tr>
        <tr>
          <td>CEP:</td>
          <td>{order?.address?.cep}</td>
        </tr>
        <tr>
          <td>Complemento:</td>
          <td>{order?.address?.complemento}</td>
        </tr>

        <tr>
          <td>Referência:</td>
          <td>{order?.address?.referencia}</td>
        </tr>

        <tr>
          <td>Parcelas:</td>
          <td>{order?.installments}</td>
        </tr>

        <tr>
          <td>Total Pago no Mercadopago:</td>
          <td>{formatPrice(order?.total_pago)}</td>
        </tr>

        <tr>
          <td>Mercadopago ID:</td>
          <td>{order?.mercadopago_id}</td>
        </tr>

        <tr>
          <td>Data de criação:</td>
          <td>{formatDateHour(order?.data_criacao)}</td>
        </tr>

        <tr>
          <td>Data de Aprovação:</td>
          <td>{formatDateHour(order?.data_aprovacao)}</td>
        </tr>

        {order?.link_boleto !== 'null' ? (
          <tr>
            <td>Link do Boleto:</td>
            <td>
              <a
                href={order?.link_boleto}
                target="_blank"
                rel="noreferrer noopener"
              >
                {order?.link_boleto}
              </a>
            </td>
          </tr>
        ) : null}
        <tr>
          <td>Cartão no Editor:</td>
          <td>
            <Link
              href={{
                pathname: `/editor/${order?.saved_card?.slug}`,
                query: {
                  url: `/editor/${order?.saved_card?.slug}`,
                  saved_card: true,
                  card: order?.saved_card?.id
                }
              }}
            >
              <a>Abrir no editor</a>
            </Link>
          </td>
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
