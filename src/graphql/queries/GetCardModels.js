const GET_CARD_MODELS = /* GraphQL */ `
  query cardModels {
    cardModels {
      id
      title
      card_category {
        id
        title
      }
    }
    cardCategories {
      id
      title
    }
  }
`;

export default GET_CARD_MODELS;
