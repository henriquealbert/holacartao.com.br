import styled from '@emotion/styled';

export const OrderTable = styled.table`
  border: 1px solid #e5e5e5;
  padding: 1rem;
  border-radius: 15px;
  margin-left: 2rem;
  flex-grow: 1;

  tbody {
    tr {
      padding: 1rem;
    }

    td:first-of-type {
      padding-right: 0.5rem;
      font-weight: bold;
    }
    td {
      border-bottom: 1px solid #e5e5e5;
      padding: 0.25rem 0;
    }
    td + td {
      padding-left: 0.5rem;
      color: var(--darker-grey);
    }

    td {
      a {
        text-decoration: underline;
        color: #000;

        &:hover {
          color: #4d4d4d;
        }
      }
    }
  }
`;
