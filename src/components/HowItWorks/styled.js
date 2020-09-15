import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as ScrollLink } from 'react-scroll';

export const Wrapper = styled.section`
  h2 {
    font-size: 2.25rem;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.02em;
    margin: 3rem auto 2rem auto;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: normal;
    color: #433b3b;
    text-align: center;

    strong {
      font-weight: 900;
    }

    span {
      display: block;
      text-transform: uppercase;
      font-weight: 900;
    }
  }
`;

export const ItemList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto 1rem auto;
  justify-content: center;

  span {
    font-size: 3.75rem;
    margin: 0 1rem;
    color: #acdd4f;
    font-weight: 900;
  }

  p {
    font-size: 1.125rem;
  }

  ${media.greaterThan('small')`
  width: 440px;
`}
`;

export const Frete = styled.div`
  text-align: center;

  span {
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
  }

  h3 {
    padding: 0.5rem 0;
    font-weight: 900;
    font-size: 1.75rem;
    line-height: 33px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  p {
    color: #433b3b;
  }

  button {
    margin-top: 1rem;
  }
`;

export const PriceBtn = styled(ScrollLink)`
  border: none;
  margin: 2rem auto 0 auto;
  display: inline-block;
  background: none;
  border-bottom: 3px solid #000000;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #505050;
  }
`;

export const BenefitWrapper = styled.div`
  h3 {
    font-size: 1.75rem;
    text-align: center;
    font-weight: 900;
    line-height: 30px;
  }
  span {
    font-weight: 900;
    font-size: 35px;
    text-align: center;
    margin: 3rem auto 1rem auto;
    display: block;
  }

  p {
    padding-top: 1rem;
    font-size: 1rem;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    line-height: 30px;
  }
`;
