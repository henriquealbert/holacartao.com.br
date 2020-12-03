import { gql } from 'graphql-request';

const MUTATION_SAVE_OBS = gql`
  mutation SaveObs($input: createObservationInput) {
    createObservation(input: $input) {
      observation {
        id
        description
        created_at
      }
    }
  }
`;

export default MUTATION_SAVE_OBS;
