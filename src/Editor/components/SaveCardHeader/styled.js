import styled from 'styled-components';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';

export const SaveMenuHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background: var(--green);
    font-weight: bold;
  }

  span {
    color: var(--red);
    font-size: 0.7rem;
    position: absolute;
    bottom: -12px;
    left: 1rem;
  }
`;

export const SavedCardNameHeader = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  input {
    display: block;
    padding: 0.7rem 1rem;
    color: #fff;
    border: none;
    background: none;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
    &:focus {
      border: 1px solid var(--green);
      border-radius: 0.5rem 0 0 0.5rem;
    }
    &.disable {
      cursor: not-allowed;
      color: var(--grey);
    }
  }
`;

export const EditSavedCardIcon = styled(Pencil)`
  width: 1.25rem;
  height: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0.5rem;
  cursor: pointer;

  &:hover {
    color: var(--green);
  }
`;
