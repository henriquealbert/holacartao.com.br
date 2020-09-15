import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  margin: 2rem auto 0.5rem auto;
  display: flex;
  flex-direction: column;

  span {
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: var(--span);
    display: block;
    font-weight: bold;
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    padding-top: 2rem;
  }

  h2 {
    width: 80%;
    margin: 0 auto;
    font-size: 23px;
    font-weight: normal;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.02em;
    padding-top: 1rem;
  }

  button {
    margin: 2rem auto;
  }
`;

export const SecondaryBtn = styled(ScrollLink)`
  display: block;
  margin: 0 auto;
  border: 2px solid #000;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 10px 2rem;
  color: #000;
  font-weight: bold;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const UnderscoreButton = styled.button`
  border: none;
  margin: 0 auto;
  display: block;
  background: none;

  a {
    border-bottom: 3px solid #000000;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: #000;
  }

  a:hover {
    color: #505050;
  }
`;
