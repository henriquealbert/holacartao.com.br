const Create_New_Saved_Card = /* GraphQL */ `
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
