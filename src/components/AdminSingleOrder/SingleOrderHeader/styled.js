import styled from '@emotion/styled';

export const OrderHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StatusAndUpdated = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0.5rem 1.5rem;
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
    font-weight: bold;
    font-size: 1.25rem;
    display: inline-block;
  }

  p {
    margin-left: 1rem;
  }
`;

export const ChangeStatus = styled.form`
  button {
    background: #111412;
    border-radius: 15px;
    color: #fff;
    border: none;
    padding: 0.5rem 0.75rem;
    transition: all 400ms;
    margin-left: 1rem;

    &:hover {
      background: #4d4d4d;
    }
  }

  select {
    padding: 0.5rem 1.5rem;
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
    font-weight: bold;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    option {
      background: #fff;
    }
  }
`;
