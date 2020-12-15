import { gql } from 'graphql-request';

const MUTATION_UPDATE_ADDRESS = gql`
  mutation createAddress($input: updateAddressInput!) {
    updateAddress(input: $input) {
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
        cep
        logradouro
        streetNumber
        complemento
        referencia
        bairro
        cidadeEstado
      }
    }
  }
`;

export default MUTATION_UPDATE_ADDRESS;
