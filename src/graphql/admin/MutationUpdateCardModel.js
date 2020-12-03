import { gql } from 'graphql-request';

const MUTATION_UPDATE_CARD_MODEL = gql`
  mutation UpdateCardModel($input: updateCardModelInput!) {
    updateCardModel(input: $input) {
      cardModel {
        id
        title
      }
    }
  }
`;

export default MUTATION_UPDATE_CARD_MODEL;
