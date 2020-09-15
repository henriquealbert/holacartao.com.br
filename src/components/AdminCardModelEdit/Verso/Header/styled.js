import styled from 'styled-components';
import { ArrowBack, Undo, Redo, Trash } from '@styled-icons/boxicons-regular';

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

export const BackLink = styled.a`
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    border: 2px solid #fff;
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
