import styled from '@emotion/styled';

export const PricingWrapper = styled.section`
  margin: 4rem 0 1rem 0;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.02em;
    padding-bottom: 1rem;
  }

  p {
    color: #433b3b;
    text-align: center;
    font-size: 1rem;
  }

  span {
    margin: 2rem 0;
    display: block;
    color: #6d6e22;
    text-transform: uppercase;
    text-align: center;
  }

  button {
    margin: 3rem auto;
  }
`;

export const Card = styled.div`
  margin: 0 auto;
  width: 306px;
  height: 353px;
  background: #f7f8f3;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  position: relative;

  img {
    position: absolute;
    top: 110px;
    left: -14px;
  }

  span {
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #000;
    font-weight: bold;
    position: absolute;
    top: 78px;
    left: -2px;
    z-index: 1;
  }
`;

export const ItemOne = styled.div`
  padding: 1.5rem 0;
  strong {
    font-weight: bold;
    font-size: 1.75rem;
    text-align: center;
    display: block;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Items = styled.div`
  padding: 3rem 0;
  strong {
    font-weight: bold;
    font-size: 1.75rem;
    text-align: center;
    display: block;
  }
  p {
    font-size: 1.5rem;
  }
  p + strong {
    padding-top: 2rem;
  }
`;
