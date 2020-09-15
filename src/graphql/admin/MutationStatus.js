const MUTATION_CHANGE_STATUS = /* GraphQL */ `
  mutation ChangeStatus($input: updateOrderInput) {
    updateOrder(input: $input) {
      order {
        id
        status
      }
    }
  }
`;

export default MUTATION_CHANGE_STATUS;
