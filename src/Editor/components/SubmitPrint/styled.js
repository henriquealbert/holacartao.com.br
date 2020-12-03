import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: var(--green);
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
  }
`;
