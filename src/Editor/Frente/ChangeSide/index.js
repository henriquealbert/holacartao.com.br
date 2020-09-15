import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function EditorChangeSide() {
  const { changeSide } = useEditorUtilsContext();

  return (
    <S.ChangeSideWrapper>
      <button onClick={changeSide}>
        Editar Verso
        <S.VersoIcon />
      </button>
    </S.ChangeSideWrapper>
  );
}
