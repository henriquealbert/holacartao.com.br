import styled from 'styled-components';
import { ArrowBack, Undo, Redo, Trash } from '@styled-icons/boxicons-regular';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';

export const HeaderEditorWrapper = styled.header`
  z-index: 999;
  height: 70px;
  background: #000;
  display: flex;
  align-items: center;
`;

export const HeaderEditorContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const MenusWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const BackLink = styled.button`
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: none;

  &:hover {
    color: #fff;
    border: 2px solid #fff;
    svg {
      color: #fff;
    }
  }
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 1rem;
  height: 1rem;
  color: var(--green);
`;

export const HeaderMenuActions = styled.div`
  margin-left: 3rem;
  ul {
    display: flex;
    align-items: center;
    li {
      cursor: pointer;
      padding: 0.5rem;
      color: #fff;

      &:hover {
        background: var(--green);
        border-radius: 0.5rem;
      }
    }
  }
`;

export const UndoIcon = styled(Undo)`
  width: 1.625rem;
  height: 1.625rem;
  font-weight: black;
  color: #fff;
`;

export const RedoIcon = styled(Redo)`
  width: 1.625rem;
  height: 1.625rem;
  font-weight: black;
  color: #fff;
`;

export const TrashIcon = styled(Trash)`
  width: 1.625rem;
  height: 1.625rem;
  font-weight: black;
  color: #fff;
`;

export const SaveMenuHeader = styled.form`
  display: flex;
  align-items: center;

  button {
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background: var(--green);
    font-weight: bold;
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
  }
`;

export const EditSavedCardIcon = styled(Pencil)`
  width: 1rem;
  height: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0.5rem;
`;
