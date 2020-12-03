import { gql } from 'graphql-request';

const Change_Pass = gql`
  mutation ChangePassword($id: ID!, $newPassword: String) {
    updateUser(
      input: { where: { id: $id }, data: { password: $newPassword } }
    ) {
      user {
        id
      }
    }
  }
`;

export default Change_Pass;
