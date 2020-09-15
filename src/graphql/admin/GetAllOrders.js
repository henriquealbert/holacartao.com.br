const GET_ALL_ORDERS = /* GraphQL */ `
  query AllOrders {
    orders {
      id
      status
      created_at
      updated_at
      quantidade
      preco
      grafica_pedido
      metodo_pagamento
      address {
        id
        name
        last_name
        cpf
        cep
        logradouro
        numero
        referencia
        telefone
        cidade
        estado
        bairro
        complemento
      }
      user {
        id
        email
      }
      observations {
        id
        created_at
        description
      }
    }
  }
`;

export default GET_ALL_ORDERS;
