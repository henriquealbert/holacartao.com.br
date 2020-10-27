import styled from 'styled-components';

export const OptionItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  h4 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 15px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--checkout-gray);
    margin-bottom: 1rem;
  }
`;

export const Medalha = styled.div`
  position: absolute;
  top: 20px;
  right: 9px;
  z-index: 1;
`;

export const Border = styled.div`
  position: relative;
  background: ${(props) =>
    props.gradient === 'standard'
      ? 'linear-gradient(to bottom, #2CAB31, #ACDD4F)'
      : props.gradient === 'cinquecento'
      ? 'linear-gradient(to bottom, #E0C34A, #181717)'
      : 'linear-gradient(to bottom, #e5e5e5, #c4c4c4)'};
  padding: 3px;
  border-radius: 20px;
`;

export const BoxOption = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: var(--black);
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  span {
    display: block;
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.02em;
  }
`;

export const Price = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 15px;
  color: var(--black);

  span {
    font-size: 15px;
  }
`;
