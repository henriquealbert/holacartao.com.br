import { gql } from 'graphql-request';

const GET_CARD_MODEL = gql`
  query LoadCardModel($id: ID!) {
    cardModel(id: $id) {
      id
      title
      frontal_card
      back_card
      card_category {
        id
        title
      }
      example_image {
        url
      }
    }
  }
`;

export default GET_CARD_MODEL;
