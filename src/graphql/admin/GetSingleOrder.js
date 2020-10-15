const GET_SINGLE_ORDER = /* GraphQL */ `
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
      cartao_verso
      cartao_frente
      saved_card {
        id
      }
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

export default GET_SINGLE_ORDER;
