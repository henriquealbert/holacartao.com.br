import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

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
    margin-bottom: 4rem;
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

  input {
    background: #c4c4c4;
    border-radius: 25px;
    width: 250px;
    height: 35px;
    display: block;
    margin: 1rem auto 0.25rem auto;
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
  margin: 2rem auto;
  display: block;

  background: #111412;
  padding: 0.75rem 3rem;
  border-radius: 15px;
  text-align: center;
  display: block;
  color: #fff;
  transition: all 500ms;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #2d3530;
    box-shadow: none;
  }
`;

export const ErroNoLoginAdmin = styled.div`
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
