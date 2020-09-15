const MUTATION_GRAFICA = /* GraphQL */ `
  mutation SaveorEditGrafica($input: updateOrderInput) {
    updateOrder(input: $input) {
      order {
        id
        grafica_pedido
      }
    }
  }
`;

export default MUTATION_GRAFICA;
