import styled from 'styled-components';

export const OrderGrafica = styled.div`
  form {
    input {
      width: 150px;
      border: none;
      background: #c4c4c4;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      padding: 0.5rem;
      margin: 0.5rem 0;
    }
    button {
      background: #111412;
      border-radius: 15px;
      color: #fff;
      border: none;
      padding: 0.5rem 0.75rem;
      transition: all 400ms;

      &:hover {
        background: #4d4d4d;
      }
    }
    button:first-child {
      margin-right: 0.5rem;
    }
  }
`;
