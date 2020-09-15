const GET_ORDER = /* GraphQL */ `
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
