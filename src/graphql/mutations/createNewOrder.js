const MUTATION_CREATE_NEW_ORDER = /* GraphQL */ `
  mutation NewOrder($input: createOrderInput!) {
    createOrder(input: $input) {
      order {
        id
      }
    }
  }
`;

export default MUTATION_CREATE_NEW_ORDER;
