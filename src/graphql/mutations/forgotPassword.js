import { gql } from 'graphql-request';

const MUTATION_FORGOT_PASS = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;

export default MUTATION_FORGOT_PASS;
