import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function CardReviewImg() {
  const { cardFrenteSangria, cardVersoSangria } = useEditorUtilsContext();
  return (
    <S.CardReviewImg>
      <div>
        <span>Frente</span>
        <img src={cardFrenteSangria} alt="Cartão Frente" />
      </div>
      <div>
        <span>Verso</span>
        <img src={cardVersoSangria} alt="Cartão Verso" />
      </div>
    </S.CardReviewImg>
  );
}
