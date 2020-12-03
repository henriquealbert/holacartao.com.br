import { gql } from 'graphql-request';

const MUTATION_CREATE_NEW_ORDER = gql`
  mutation NewOrder($input: createOrderInput!) {
    createOrder(input: $input) {
      order {
        id
      }
    }
  }
`;

export default MUTATION_CREATE_NEW_ORDER;
