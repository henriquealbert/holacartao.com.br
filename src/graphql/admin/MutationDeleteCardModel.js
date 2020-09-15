const MUTATION_DELETE_CARD_MODEL = /* GraphQL */ `
  mutation DeleteCardModel($input: deleteCardModelInput!) {
    deleteCardModel(input: $input) {
      cardModel {
        id
      }
    }
  }
`;

export default MUTATION_DELETE_CARD_MODEL;
