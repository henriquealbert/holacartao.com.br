import Link from 'next/link';
import * as S from './styled';
import { useEditorStoreVerso } from '../Store';

export default function EditorHeaderVerso() {
  const { removeElement, handleUndo } = useEditorStoreVerso();

  return (
    <S.HeaderEditorWrapper>
      <S.HeaderEditorContainer>
        <div>
          <Link href="/admin/card-models">
            <S.BackLink title="Sair do Editor">
              <S.ArrowBackIcon /> Sair do Editor
            </S.BackLink>
          </Link>
        </div>
        <S.MenusWrapper>
          <S.HeaderMenuActions>
            <ul>
              <li onClick={handleUndo}>
                <S.UndoIcon />
              </li>

              <li onClick={removeElement}>
                <S.TrashIcon />
              </li>
            </ul>
          </S.HeaderMenuActions>
        </S.MenusWrapper>
      </S.HeaderEditorContainer>
    </S.HeaderEditorWrapper>
  );
}
