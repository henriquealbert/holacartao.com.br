const MUTATION_FORGOT_PASS = /* GraphQL */ `
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;

export default MUTATION_FORGOT_PASS;
