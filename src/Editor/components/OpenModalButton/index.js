import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function OpenModalButton({ user }) {
  const { openModal } = useEditorUtilsContext();

  return (
    <S.Wrapper>
      <button onClick={openModal}>
        {user ? 'Finalizado, Próximo Passo' : 'Finalizar'}
        <S.ArrowNextIcon />
      </button>
    </S.Wrapper>
  );
}
