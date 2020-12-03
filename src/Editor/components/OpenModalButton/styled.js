import styled from '@emotion/styled';
import { BiRightArrowAlt } from 'react-icons/bi';

export const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  button {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background: var(--green);
    font-weight: bold;
  }
`;

export const ArrowNextIcon = styled(BiRightArrowAlt)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
`;
