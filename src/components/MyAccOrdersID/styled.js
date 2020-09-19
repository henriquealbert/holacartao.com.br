import styled from 'styled-components';

export const MyAccOrdersID = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 1.875rem;

    &:before {
      display: block;
      content: '';
      width: 32px;
      height: 3px;
      border-radius: 10px;
      background: #000;
      margin-bottom: 0.625rem;
    }
  }

  table {
    overflow-x: scroll;
    width: 100%;
    display: table;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 2rem;
    color: #7d7d7d;
    border-collapse: collapse;
    border-spacing: 2px;
    border-color: grey;

    thead {
      tr {
        background: #282a2d;
        color: #ffffff;

        th {
          font-weight: normal;
          padding: 1rem;
          text-align: left;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #282a2d;
        td {
          padding: 1rem;
        }
      }
    }
  }
`;

export const StatusColor = styled.span`
  display: inline;
  padding: 0.25rem 0.4rem;
  border-radius: 1rem;
  color: #000;
  background: ${({ status }) =>
    status === 'analise'
      ? 'var(--yellow)'
      : status === 'producao'
      ? 'var(--blue)'
      : status === 'transporte'
      ? 'var(--transporte)'
      : status === 'erro'
      ? 'var(--red)'
      : status === 'entregue'
      ? 'var(--deliver)'
      : status === 'estorno'
      ? 'var(--grey)'
      : status === 'cancelado'
      ? 'var(--grey)'
      : ''};
`;

export const OrderDetails = styled.div`
  margin-bottom: 2rem;

  p {
    strong {
      color: var(--green);
    }
  }
`;

export const Address = styled.ul`
  li {
    line-height: 1.6;
    span {
      font-weight: normal;
      margin-left: 0.5rem;
      color: var(--darker-grey);
    }
  }
`;
