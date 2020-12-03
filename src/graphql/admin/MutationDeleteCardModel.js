import { gql } from 'graphql-request';

const MUTATION_DELETE_CARD_MODEL = gql`
  mutation DeleteCardModel($input: deleteCardModelInput!) {
    deleteCardModel(input: $input) {
      cardModel {
        id
      }
    }
  }
`;

export default MUTATION_DELETE_CARD_MODEL;
