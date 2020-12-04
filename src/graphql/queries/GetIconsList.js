import { gql } from 'graphql-request';

const GET_ICONS_LIST = gql`
  query IconsList {
    icons {
      id
      name
      paths {
        id
        data
      }
    }
  }
`;

export default GET_ICONS_LIST;
