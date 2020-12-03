import { gql } from 'graphql-request';

const GET_TERMS = gql`
  query TermsPage {
    termosEPolitica {
      id
      title
      content
    }
  }
`;

export default GET_TERMS;
