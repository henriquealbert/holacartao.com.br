import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function ChangeSide({ frente, editorStore }) {
  const { changeSide } = useEditorUtilsContext();
  const { saveFinalCard, saveWithSangria } = editorStore;

  console.log();

  return (
    <S.ChangeSideWrapper frente={frente} id="changeSide">
      <button onClick={() => changeSide(saveWithSangria(), saveFinalCard())}>
        {frente === true ? (
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
