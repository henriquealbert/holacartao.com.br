const GET_HELP_PAGE = /* GraphQL */ `
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
