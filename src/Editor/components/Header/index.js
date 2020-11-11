import Link from 'next/link';
import SaveCardHeader from '../SaveCardHeader';
import Router from 'next/router';

import * as S from './styled';

export default function Header({ editorStore, user }) {
  const {
    removeElement,
    handleUndo,
    selectedId,
    store,
    setStore
  } = editorStore;

  const moveUp = () => {
    if (selectedId === null) {
      return;
    }
    console.log(selectedId);
  };
  const moveDown = () => {};

  return (
    <S.HeaderEditorWrapper>
      <S.HeaderEditorContainer>
        <div>
          {user ? (
            <S.BackLink title="Sair do Editor" onClick={() => Router.back()}>
              <S.ArrowBackIcon /> Sair do Editor
            </S.BackLink>
          ) : (
            <Link href="/admin/card-models/">
              <a>
                <S.BackLink title="Sair do Editor">
                  <S.ArrowBackIcon /> Sair do Editor
                </S.BackLink>
              </a>
            </Link>
          )}
        </div>
        <S.MenusWrapper>
          <S.HeaderMenuActions>
            <ul>
              {user ? (
                <Link href="/modelos/">
                  <a>
                    <li>Novo Modelo</li>
                  </a>
                </Link>
              ) : (
                ''
              )}
              <li onClick={handleUndo}>
                <S.UndoIcon />
              </li>

              <li onClick={removeElement}>
                <S.TrashIcon />
              </li>
              <li onClick={moveUp}>Pra Cima</li>
              <li onClick={moveDown}>Pra Baixo</li>
            </ul>
          </S.HeaderMenuActions>
          {user ? <SaveCardHeader /> : ''}
        </S.MenusWrapper>
      </S.HeaderEditorContainer>
    </S.HeaderEditorWrapper>
  );
}
