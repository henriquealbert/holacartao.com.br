import styled from 'styled-components';
import { RotateLeft } from '@styled-icons/boxicons-regular/RotateLeft';

export const ChangeSideWrapper = styled.div`
  margin-top: 1.5rem;
  align-self: flex-end;

  button {
    border: none;
    background: none;
    color: #000;
    &:hover {
      text-decoration: underline;
      color: var(--green);
      svg {
        color: var(--green);
      }
    }
  }
`;

export const VersoIcon = styled(RotateLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.25rem;
`;
