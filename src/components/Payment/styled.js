import styled from 'styled-components';
import media from 'styled-media-query';

export const PaymentWrapper = styled.section`
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.25rem;
  }

  button {
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
    border: none;
    margin: 2rem auto;

    &:hover {
      background: #99c446;
    }
  }
`;

export const PaymentPricing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-gap: 0.25rem;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;

  ${media.greaterThan('small')`
    margin: 2rem auto;
  `}

  ${media.greaterThan('medium')`
    grid-gap: 1rem;
    width: 80%;
  `}

  ${media.greaterThan('large')`
   width: 50%;
   margin: 2rem auto;
  `}
`;

export const PaymentPricingItem1 = styled.div`
  background: #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0.75rem 0;

  p {
    font-weight: 900;
  }

  p + p {
    font-weight: normal;
    font-size: 0.75rem;
    text-align: center;
  }

  span {
    font-weight: normal;
    font-size: 0.75rem;
  }

  div {
    margin: 1rem auto;
  }

  input {
    display: block;
    background: #ffffff;
    border: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const PaymentPricingItem2 = styled.div`
  background: #acdd4f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding-bottom: 1.5rem;
  position: relative;

  p {
    font-weight: 900;
    font-size: 1.5rem;
    color: #fff;
  }

  p + p {
    font-weight: normal;
    font-size: 0.75rem;
    text-align: center;
  }

  span {
    font-weight: normal;
    font-size: 0.75rem;
    color: #6d6e22;
  }

  strong {
    color: #6d6e22;
    font-weight: 900;
    font-size: 1.5rem;
  }

  div {
    margin: 1rem auto;
  }

  input {
    display: block;
    background: #ffffff;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const PricingBadge = styled.div`
  position: relative;
  top: 0;
  z-index: 100;
  background: #433b3b;
  height: 2rem;
  width: 100%;
  margin: 0 0 1rem 0 !important;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-transform: uppercase;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
`;

export const PaymentPricingItem3 = styled.div`
  background: #a4f572;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0.75rem 0;

  p {
    font-weight: 900;
  }

  p + p {
    font-weight: normal;
    font-size: 0.75rem;
    text-align: center;
  }

  span {
    font-weight: normal;
    font-size: 0.75rem;
  }

  div {
    margin: 1rem auto;
  }

  input {
    display: block;
    background: #ffffff;
    border: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const PaymentFrete = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  display: block;
  font-weight: bold;
`;

export const CartaoInfo = styled.p`
  text-align: center;
  padding: 1rem 0;
  margin: 0 1rem;
`;

export const PaymentUserDetails = styled.div`
  margin: 2rem auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin: 0.75rem auto;

    label {
      font-weight: bold;
    }

    input {
      width: 100%;
      border-radius: 15px;
      border: none;
      background: #e5e5e5;
      padding: 0.5rem 1rem;
    }

    input.disable {
      cursor: not-allowed;
    }
  }

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 350px 350px;
    justify-content: center;

    div {
      input {
        width: 300px;
      }
    }
    .name,.cpf,.cep,.numero,.bairro {
      justify-self: start;
      align-items: end;
      margin: 0.75rem 1rem;
    }
    .lastName, .telefone, .rua, .referencia, .cidade {
      align-items: end;
      justify-self: start;
      margin: 0.75rem 1rem;
    }


  `}
`;

export const PaymentTotalTable = styled.table`
  margin: 2rem auto;
  width: 80%;

  tbody {
    tr {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      padding: 1rem 0;
    }
  }

  ${media.greaterThan('medium')`
    width: 650px;
  `}
`;

export const PaymentCardInfoContainer = styled.div`
  margin: 2rem auto;
  text-align: center;

  p:first-child {
    font-weight: bold;
  }
`;

export const PaymentCardInfoWrapper = styled.div`
  margin-top: 2rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin: 0.75rem auto;

    label {
      font-weight: bold;
    }

    input {
      width: 100%;
      border-radius: 15px;
      border: none;
      background: #e5e5e5;
      padding: 0.5rem 1rem;
    }

    select {
      width: 100%;
      border-radius: 15px;
      border: none;
      background: #e5e5e5;
      padding: 0.5rem 1rem;
    }
  }
  .validade {
    flex-direction: row;
    width: 100%;
    input {
      flex-grow: 1;
      width: 100%;
    }
    input:last-child {
      margin-left: 1rem;
    }
  }

  ${media.greaterThan('medium')`
  div {
    width: 650px;
    justify-content: center;
  }
  `}
`;
