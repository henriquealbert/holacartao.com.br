import Link from 'next/link';
import SaveCardHeader from '../SaveCardHeader';

import * as S from './styled';

export default function Header({ editorStore, user }) {
  const { removeElement, handleUndo } = editorStore;
  return (
    <S.HeaderEditorWrapper>
      <S.HeaderEditorContainer>
        <div>
          {user ? (
            <Link href="/modelos/">
              <a>
                <S.BackLink title="Sair do Editor">
                  <S.ArrowBackIcon /> Sair do Editor
                </S.BackLink>
              </a>
            </Link>
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
            </ul>
          </S.HeaderMenuActions>
          {user ? <SaveCardHeader /> : ''}
        </S.MenusWrapper>
      </S.HeaderEditorContainer>
    </S.HeaderEditorWrapper>
  );
}
