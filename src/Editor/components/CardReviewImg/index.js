import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function CardReviewImg({ user }) {
  const {
    cardFrenteSangria,
    cardVersoSangria,
    cardFrenteFinal,
    cardVersoFinal
  } = useEditorUtilsContext();
  return (
    <S.CardReviewImg>
      <div>
        <span>Frente</span>
        <img
          src={user ? cardFrenteSangria : cardFrenteFinal}
          alt="Cartão Frente"
        />
      </div>
      <div>
        <span>Verso</span>
        <img
          src={user ? cardVersoSangria : cardVersoFinal}
          alt="Cartão Verso"
        />
      </div>
    </S.CardReviewImg>
  );
}
