const GET_SAVED_CARDS = /* GraphQL */ `
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
