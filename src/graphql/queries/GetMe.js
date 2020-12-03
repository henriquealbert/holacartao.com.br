import { gql } from 'graphql-request';

const GET_ME = gql`
  query ME {
    me {
      id
      username
      email
    }
  }
`;

export default GET_ME;
