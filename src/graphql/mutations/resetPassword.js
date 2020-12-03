import { gql } from 'graphql-request';

const MUTATION_RESET_PASS = gql`
  mutation ResetPassword(
    $code: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    resetPassword(
      code: $code
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      user {
        id
      }
    }
  }
`;

export default MUTATION_RESET_PASS;
