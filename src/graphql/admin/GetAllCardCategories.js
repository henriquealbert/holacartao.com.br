import { gql } from 'graphql-request';

const GET_ALL_CARD_CATEGORIES = gql`
  query AllCardCategories {
    cardCategories {
      id
      title
    }
  }
`;

export default GET_ALL_CARD_CATEGORIES;
