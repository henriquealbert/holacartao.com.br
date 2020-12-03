import { gql } from 'graphql-request';

const MUTATION_UPDATE_SAVED_CARD = gql`
  mutation UpdateSavedCard($input: updateSavedCardInput!) {
    updateSavedCard(input: $input) {
      savedCard {
        id
        title
      }
    }
  }
`;

export default MUTATION_UPDATE_SAVED_CARD;
