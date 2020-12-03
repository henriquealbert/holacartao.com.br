import { gql } from 'graphql-request';

const GET_CARD_MODELS = gql`
  query cardModels {
    cardModels {
      id
      title
      slug
      example_image {
        id
        url
      }
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
