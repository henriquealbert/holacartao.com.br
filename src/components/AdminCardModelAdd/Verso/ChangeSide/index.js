import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function EditorChangeSide() {
  const { changeSide } = useEditorUtilsContext();

  return (
    <S.ChangeSideWrapper>
      <button onClick={changeSide}>
        Editar Frente
        <S.FrenteIcon />
      </button>
    </S.ChangeSideWrapper>
  );
}
