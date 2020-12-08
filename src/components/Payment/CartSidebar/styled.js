import styled from '@emotion/styled';

export const Content = styled.div`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 3.5rem;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 37px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 4px;
    color: var(--black);

    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 1px;
      width: 170px;
      bottom: 0;
      background: var(--black);
      z-index: 1;
    }
  }
`;

export const CardInfo = styled.div`
  margin-top: 45px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  p {
    font-family: 'Varela', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: var(--gray-2);
    max-width: 190px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 90px;
      width: 1px;
      left: -22px;
      top: 0;
      background: var(--white-3);
      z-index: 1;
    }
  }

  img {
    padding-right: 2rem;
  }
`;

export const PriceInfo = styled.div`
  position: relative;
  p {
    padding-right: 1rem;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
    font-family: 'Varela', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: var(--gray-2);
  }
  p:last-child {
    padding: 0;
  }

  .sidebar-cart-total:before {
    content: '';
    position: absolute;
    display: block;
    height: 1px;
    width: 80%;
    bottom: 45px;
    background: var(--white-3);
    z-index: 1;
  }

  .sidebar-cart-total {
    h4 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 37px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      padding-top: 1.5rem;
    }
  }
`;
