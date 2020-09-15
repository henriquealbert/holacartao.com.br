import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-solid/';

export const DeleteIcon = styled(Trash)`
  width: 1.4rem;
  height: 1.4rem;
  color: red;
  cursor: pointer;
`;

export const ModalContentDelete = styled.div`
  padding: 2rem;
  max-width: 450px;

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto 0 auto;
`;

export const ButtonNope = styled.button`
  border: none;
  border-radius: 0.5rem;
  background: var(--grey);
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonDel = styled.button`
  border: none;
  border-radius: 0.5rem;
  background: var(--red);
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  font-weight: bold;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
