const GET_SINGLE_SAVED_CARD = /* GraphQL */ `
  query SavedCard($id: ID!) {
    savedCard(id: $id) {
      id
      title
      order {
        id
      }
      front_card
      back_card
      slug
    }
  }
`;

export default GET_SINGLE_SAVED_CARD;
