import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function OpenModalButton({ user, editorStore }) {
  const { openModal } = useEditorUtilsContext();
  const { saveFinalCard, saveWithSangria } = editorStore;

  return (
    <S.Wrapper>
      <button onClick={() => openModal(saveWithSangria(), saveFinalCard())}>
        {user ? 'Finalizado, Próximo Passo' : 'Finalizar'}
        <S.ArrowNextIcon />
      </button>
    </S.Wrapper>
  );
}
