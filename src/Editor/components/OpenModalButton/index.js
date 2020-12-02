import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function OpenModalButton({ user, editorStore }) {
  const { openModal } = useEditorUtilsContext();
  const { saveFinalCard, saveWithSangria } = editorStore;

  const handleClick = async () => {
    await openModal(saveWithSangria(), saveFinalCard());
  };

  return (
    <S.Wrapper>
      <button onClick={handleClick}>
        {user ? 'Finalizado, Próximo Passo' : 'Finalizar'}
        <S.ArrowNextIcon />
      </button>
    </S.Wrapper>
  );
}
