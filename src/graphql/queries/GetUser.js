import { gql } from 'graphql-request';

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      username
      email
      occupation
    }
  }
`;

export default GET_USER;
