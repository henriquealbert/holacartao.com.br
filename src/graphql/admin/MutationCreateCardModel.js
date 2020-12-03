import { gql } from 'graphql-request';

const MUTATION_CREATE_CARD_MODEL = gql`
  mutation CreateCardModel($input: createCardModelInput!) {
    createCardModel(input: $input) {
      cardModel {
        id
        title
      }
    }
  }
`;

export default MUTATION_CREATE_CARD_MODEL;
