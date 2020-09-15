import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function ButtonSave() {
  const { openModal } = useEditorUtilsContext();

  return (
    <S.ButtonSave>
      <button onClick={openModal}>
        Finalizar
        <S.ArrowNextIcon />
      </button>
    </S.ButtonSave>
  );
}
