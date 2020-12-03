import { gql } from 'graphql-request';

const GET_ORDERS = gql`
  query Orders($id: ID!) {
    user(id: $id) {
      orders {
        id
        created_at
        status
        preco
        quantidade
      }
    }
  }
`;

export default GET_ORDERS;
