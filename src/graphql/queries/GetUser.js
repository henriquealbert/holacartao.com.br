const GET_USER = /* GraphQL */ `
  query User($id: ID!) {
    user(id: $id) {
      username
      email
      occupation
    }
  }
`;

export default GET_USER;
