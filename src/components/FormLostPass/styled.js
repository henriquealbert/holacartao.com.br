import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem auto;

  h1 {
    font-size: 1.75rem;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}

  input {
    background: #c4c4c4;
    border-radius: 25px;
    width: 250px;
    height: 35px;
    display: block;
    margin: 1rem auto 0.25rem;
    border: none;
    padding: 0.5rem 1rem;
    color: #000;
    font-weight: bold;

    &::placeholder {
      font-weight: normal;
    }
  }

  form {
    margin-top: 1rem;
    div {
      span {
        display: block;
        color: #fe0e38;
        text-align: center;
        margin: 0;
        font-size: 0.75rem;
      }
    }
  }

`;

export const BtnSubmit = styled.button`
  border: none;
  margin: 1rem auto 0;
  display: block;

  background: var(--green);
  padding: 1rem 2rem;
  border-radius: 25px;
  text-align: center;
  display: block;
  color: #000;
  transition: all 300ms;
  font-weight: bold;

  &:hover {
    background: #99c446;
  }
`;

export const Erro = styled.div`
  span {
    small {
      display: block;
      color: #fe0e38;
      text-align: center;
      margin: 0;
      font-size: 0.75rem;
      font-weight: normal;
    }
    strong {
      display: block;
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;
