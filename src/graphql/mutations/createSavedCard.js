import { gql } from 'graphql-request';

const MUTATION_CREATE_SAVED_CARD = gql`
  mutation CreateSavedCard($input: createSavedCardInput!) {
    createSavedCard(input: $input) {
      savedCard {
        id
        title
      }
    }
  }
`;

export default MUTATION_CREATE_SAVED_CARD;
