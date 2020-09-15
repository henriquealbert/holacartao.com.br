import styled from 'styled-components';

export const TrelloContainer = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
`;

export const Card = styled.div`
  margin: 0 1rem 3rem 0;
  background: #e5e5e5;
  border-radius: 15px;
  width: 230px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Pedido = styled.div`
  background: ${(props) =>
    props.color === 'analise'
      ? 'var(--yellow)'
      : props.color === 'producao'
      ? 'var(--blue)'
      : props.color === 'transporte'
      ? 'var(--transporte)'
      : props.color === 'erro'
      ? 'var(--red)'
      : props.color === 'entregue'
      ? 'var(--deliver)'
      : props.color === 'estorno'
      ? 'var(--grey)'
      : props.color === 'cancelado'
      ? 'var(--grey)'
      : ''};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border: none;
  transition: all 400ms;
  cursor: pointer;

  a {
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    color: #000;
  }
  span {
    font-weight: bold;
    font-size: 1.25rem;
  }

  &:hover {
    box-shadow: none;
  }
`;
