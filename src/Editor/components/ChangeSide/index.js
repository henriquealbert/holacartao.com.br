import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function ChangeSide({ frente, editorStore }) {
  const { changeSide } = useEditorUtilsContext();
  const { saveFinalCard, saveWithSangria } = editorStore;

  const handleChange = async () => {
    await changeSide(saveWithSangria(), saveFinalCard());
  };

  return (
    <S.ChangeSideWrapper id="changeSide">
      <button onClick={handleChange}>
        {frente ? (
          <>
            Editar Verso
            <S.VersoIcon />
          </>
        ) : (
          <>
            Editar Frente
            <S.FrenteIcon />
          </>
        )}
      </button>
    </S.ChangeSideWrapper>
  );
}
