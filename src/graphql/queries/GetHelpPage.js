import { gql } from 'graphql-request';

const GET_HELP_PAGE = gql`
  query HelpPage {
    centralDeAjuda {
      id
      infoContato
      navLinks {
        id
        title
        link
      }
      sections {
        id
        title
        link
        content
        images {
          id
          url
          alternativeText
        }
      }
    }
  }
`;

export default GET_HELP_PAGE;
