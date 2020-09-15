const GET_ALL_CARD_MODELS = /* GraphQL */ `
  query AllCardModels {
    cardModels {
      id
      title
      created_at
      updated_at
      slug
      card_category {
        id
        title
      }
      example_image {
        id
        url
      }
    }
  }
`;

export default GET_ALL_CARD_MODELS;
