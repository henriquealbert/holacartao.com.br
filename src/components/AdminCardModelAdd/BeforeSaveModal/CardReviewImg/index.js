import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import * as S from './styled';

export default function CardReviewImg() {
  const { modalIsOpen, frontCardImg } = useEditorUtilsContext();

  const backCardImg = () => {
    if (modalIsOpen) {
      const img = document
        .getElementsByTagName('canvas')[0]
        .toDataURL('image/png', 1.0);
      return img;
    }
  };
  return (
    <S.CardReviewImg>
      <div>
        <span>Frente</span>
        <img src={frontCardImg} alt="Cartão Frente" />
      </div>
      <div>
        <span>Verso</span>
        <img src={backCardImg()} alt="Cartão Verso" />
      </div>
    </S.CardReviewImg>
  );
}
