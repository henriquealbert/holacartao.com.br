import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  h1 {
    font-size: 1.75rem;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;

    a {
      text-decoration: underline;
      color: #000;
      font-weight: normal;

      &:hover {
        font-weight: bold;
      }
    }
  }

  input,
  option,
  select {
    background: #c4c4c4;
    border-radius: 25px;
    width: 250px;
    height: 35px;
    display: block;
    margin: 1rem auto 0 auto;
    border: none;
    padding: 0.5rem 1rem;
    color: #000;
    font-weight: bold;

    &::placeholder {
      font-weight: normal;
      color: #717171;
    }
  }

  form {
    margin-bottom: 4rem;
    margin-top: 1rem;
    span {
      display: block;
      color: #fe0e38;
      text-align: center;
      margin: 0;
      font-size: 0.75rem;
    }
  }
`;

export const BtnSubmit = styled.button`
  border: none;
  margin: 2rem auto;
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

export const ErroNoLoginCreate = styled.div`
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
      font-size: 0.9rem;
    }
  }
`;

export const TermsWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  input {
    margin: 0;
    width: 1rem;
    height: 1rem;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    border: 1px solid #c4c4c4;
  }
  p {
    margin: 0 0 0 0.5rem;
    a {
      color: #0f45ff;
      &:hover {
        color: #0c37cc;
        font-weight: normal;
      }
    }
  }
`;
