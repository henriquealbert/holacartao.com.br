import styled from '@emotion/styled';

export const MyAccHelp = styled.div`
  width: 750px;

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 1.875rem;

    &:before {
      display: block;
      content: '';
      width: 32px;
      height: 3px;
      border-radius: 10px;
      background: #000;
      margin-bottom: 0.625rem;
    }
  }

  a {
    text-decoration: underline;
    color: #000;

    &:hover {
      text-decoration: none;
    }
  }

  form {
    max-width: 600px;

    p {
      font-weight: bold;
      margin-top: 2rem;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;

  textarea {
    margin: 0.5rem 0;
    background: #c4c4c4;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    border: none;
    font-family: 'Roboto';
    font-size: 1rem;
    display: block;
    flex-grow: 1;
    width: 100%;
  }

  span {
    display: block;
    color: #fe0e38;
    text-align: center;
    margin: 0;
    font-size: 0.75rem;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  input {
    margin: 0.5rem 0;
    background: #c4c4c4;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    border: none;
    font-family: 'Roboto';
    font-size: 1rem;
    display: block;
    flex-grow: 1;
    width: 100%;
  }
`;

export const buttonSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.25rem;

  button {
    border: none;
    background: var(--green);
    padding: 1rem 2rem;
    border-radius: 25px;
    font-weight: bold;
  }
`;

export const Success = styled.p`
  display: block;
  color: var(--green);
  font-weight: normal;
`;
