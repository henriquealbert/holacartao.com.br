import { gql } from 'graphql-request';

const GET_SINGLE_ORDER = gql`
  query SingleOrder($id: ID!) {
    order(id: $id) {
      id
      status
      created_at
      updated_at
      quantidade
      preco
      grafica_pedido
      metodo_pagamento
      docType
      docNumber
      installments
      total_pago
      mercadopago_id
      link_boleto
      data_aprovacao
      data_criacao
      cartao_frente
      cartao_verso
      saved_card {
        id
      }
      address {
        id
        firstName
        lastName
        email
        cep
        logradouro
        streetNumber
        referencia
        areaCode
        phoneNumber
        cidadeEstado
        bairro
        complemento
      }
      user {
        id
      }
      observations {
        id
        created_at
        description
      }
    }
  }
`;

export default GET_SINGLE_ORDER;
