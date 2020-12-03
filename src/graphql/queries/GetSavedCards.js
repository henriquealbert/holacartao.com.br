import { gql } from 'graphql-request';

const GET_SAVED_CARDS = gql`
  query SavedCards($id: ID!) {
    user(id: $id) {
      saved_cards {
        id
        title
        slug
        created_at
        updated_at
      }
    }
  }
`;

export default GET_SAVED_CARDS;
