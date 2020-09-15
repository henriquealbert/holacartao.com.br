import styled from 'styled-components';
import { Edit, Trash } from '@styled-icons/boxicons-solid/';

export const AdminCardTableWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1rem;
  }
`;

export const TableCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

    thead {
      th {
        padding: 1.5rem;
        text-align: center;
        vertical-align: bottom;
        text-transform: uppercase;
        background: #e0e0e0;
      }

      th:first-child {
        border-radius: 1rem 0 0 0;
      }

      th:last-child {
        border-radius: 0 1rem 0 0;
      }
    }

    td {
      border-width: 0 0 1px;
      border-bottom: 1px solid #cbcbcb;
      padding: 1rem;
      text-align: center;
    }

    tbody > tr {
      &:hover {
        color: var(--darker-grey);
      }
    }

    tbody > tr:last-child > td {
      border-bottom-width: 0;
    }

    td {
      img {
        width: 70px;
        border-radius: 1rem;
      }
    }
  }
`;

export const EditIcon = styled(Edit)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  color: var(--green);
`;
