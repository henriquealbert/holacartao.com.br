import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function ChangeSide({ frente, editorStore }) {
  const { changeSide } = useEditorUtilsContext();
  const { saveFinalCard, saveWithSangria } = editorStore;

  const handleChange = () => {
    changeSide(saveWithSangria, saveFinalCard);
  };

  return (
    <S.ChangeSideWrapper frente={frente} id="changeSide">
      <button onClick={handleChange}>
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
