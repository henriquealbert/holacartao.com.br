import { gql } from 'graphql-request';

const MUTATION_CHANGE_STATUS = gql`
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
