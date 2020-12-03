import { gql } from 'graphql-request';

const GET_ORDER = gql`
  query Order($id: ID!) {
    order(id: $id) {
      id
      status
      quantidade
      preco
      created_at
      metodo_pagamento
      address {
        id
        name
        last_name
        cpf
        cep
        telefone
        logradouro
        numero
        complemento
        referencia
        bairro
        cidade
        estado
      }
      user {
        id
        email
      }
    }
  }
`;

export default GET_ORDER;
