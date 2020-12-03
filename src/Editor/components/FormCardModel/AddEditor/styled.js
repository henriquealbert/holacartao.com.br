import styled from '@emotion/styled';

export const FormSave = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const BtnSave = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: var(--green);
  font-weight: bold;
`;

export const FieldItem = styled.div`
  input,
  label {
    display: block;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input[type='text'] {
    border-radius: 4px;
    border: 1px solid var(--lighter-grey);
    padding: 0.5rem 1rem;
    background: var(--lighter-grey);
    font-size: 1rem;
    width: 60%;

    &:focus {
      border: 1px solid var(--green);
    }
  }
`;

export const BtnsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const ButtonBack = styled.button`
  border: none;
  background: none;
  justify-self: start;
`;
