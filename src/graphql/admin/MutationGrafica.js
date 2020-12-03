import { gql } from 'graphql-request';

const MUTATION_GRAFICA = gql`
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
