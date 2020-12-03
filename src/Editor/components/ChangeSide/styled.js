import styled from '@emotion/styled';
import { BiRotateLeft, BiRotateRight } from 'react-icons/bi';

export const ChangeSideWrapper = styled.div`
  margin-top: 1.5rem;
  align-self: ${(props) => (props.frente ? 'flex-end' : 'flex-start')};

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

export const VersoIcon = styled(BiRotateLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.25rem;
`;

export const FrenteIcon = styled(BiRotateRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.25rem;
`;
