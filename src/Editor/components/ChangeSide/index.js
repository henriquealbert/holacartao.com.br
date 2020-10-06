import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function ChangeSide({ frente }) {
  const { changeSide } = useEditorUtilsContext();

  return (
    <S.ChangeSideWrapper frente={frente} id="changeSide">
      <button onClick={changeSide}>
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
