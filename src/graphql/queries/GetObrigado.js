import { gql } from 'graphql-request';

const GET_OBRIGADO = gql`
  query Obrigado($id: ID!) {
    user(id: $id) {
      id
      orders(sort: "created_at:DESC", limit: 1) {
        id
        created_at
      }
    }
  }
`;

export default GET_OBRIGADO;
