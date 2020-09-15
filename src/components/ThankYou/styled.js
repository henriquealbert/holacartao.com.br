import styled from 'styled-components';

export const ThankYouWrapper = styled.section`
  margin: 4rem auto;
  h1 {
    text-align: center;
    font-size: 2.5rem;
  }

  span {
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
    display: block;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    margin: 0 auto;
  }

  button {
    border: none;
    margin: 1rem auto;
    display: block;
    border-radius: 20px;

    a {
      display: block;
      padding: 1rem 2rem;
      text-align: center;
      color: #000;
      font-size: 16px;
      font-weight: bold;
      background: #acdd4f;
      border-radius: 20px;
      justify-content: center;
      text-transform: uppercase;
      transition: all 300ms;
    }
    a:hover {
      background: #99c446;
    }
  }

  p {
    a {
      color: #000;
      font-weight: bold;
      text-decoration: underline;

      &:hover {
        color: #585858;
      }
    }
  }

  @media (min-width: 450px) {
    p {
      width: 450px;
    }
  }
`;

export const ThankYouImg = styled.div`
  display: flex;
  margin-top: 2rem;

  img {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
`;
