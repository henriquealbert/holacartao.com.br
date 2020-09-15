import styled from 'styled-components';
import { RotateRight } from '@styled-icons/boxicons-regular/RotateRight';

export const ChangeSideWrapper = styled.div`
  margin-top: 1.5rem;
  align-self: flex-start;

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

export const FrenteIcon = styled(RotateRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.25rem;
`;
