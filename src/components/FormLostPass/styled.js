import styled from 'styled-components';

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
    margin: 1rem auto;
    border: none;
    padding: 0.5rem 1rem;
    color: #000;
    font-weight: bold;

    &::placeholder {
      font-weight: normal;
    }
  }

`;

export const BtnSubmit = styled.button`
  border: none;
  margin: 0 auto;
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
