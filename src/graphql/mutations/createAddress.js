import { gql } from 'graphql-request';

const MUTATION_CREATE_ADDRESS = gql`
  mutation createAddress($input: createAddressInput!) {
    createAddress(input: $input) {
      address {
        order {
          id
        }
        id
        firstName
        lastName
        email
        areaCode
        phoneNumber
      }
    }
  }
`;

export default MUTATION_CREATE_ADDRESS;
