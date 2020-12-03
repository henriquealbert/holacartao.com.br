import styled from '@emotion/styled';

export const OrderObservations = styled.div`
  h3 {
    margin-top: 1rem;
  }
  form {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    textarea {
      font-style: 'Roboto';
      font-size: 1rem;
      width: 100%;
      background: #ffffff;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      border: none;
      padding: 1rem;
    }

    button {
      background: #111412;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 15px;
      color: #ffffff;
      padding: 0.35rem 1rem;
      border: none;
      width: 100px;
      align-self: flex-end;
      margin-top: 0.5rem;
      transition: all 400ms;

      &:hover {
        background: #4d4d4d;
      }
    }
  }
`;
