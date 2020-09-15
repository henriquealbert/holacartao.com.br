const MUTATION_CREATE_CARD_MODEL = /* GraphQL */ `
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
