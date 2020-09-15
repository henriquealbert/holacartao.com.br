const GET_ALL_CARD_CATEGORIES = /* GraphQL */ `
  query AllCardCategories {
    cardCategories {
      id
      title
    }
  }
`;

export default GET_ALL_CARD_CATEGORIES;
