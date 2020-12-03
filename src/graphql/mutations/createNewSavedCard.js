import { gql } from 'graphql-request';

const Create_New_Saved_Card = gql`
  mutation SaveUserModelCard {
    createSavedCard {
      savedCard {
        id
        title
      }
    }
  }
`;

export default Create_New_Saved_Card;
