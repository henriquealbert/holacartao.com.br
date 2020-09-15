const GET_ORDERS = /* GraphQL */ `
  query Orders($id: ID!) {
    user(id: $id) {
      orders {
        id
        created_at
        status
        preco
        quantidade
      }
    }
  }
`;

export default GET_ORDERS;
