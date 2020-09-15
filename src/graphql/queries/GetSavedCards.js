const GET_SAVED_CARDS = /* GraphQL */ `
  query SavedCards($id: ID!) {
    user(id: $id) {
      saved_cards {
        id
        title
        card_model {
          title
          card_category {
            title
          }
        }
        created_at
        updated_at
      }
    }
  }
`;

export default GET_SAVED_CARDS;
