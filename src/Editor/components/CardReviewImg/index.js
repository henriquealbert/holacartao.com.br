import * as S from './styled';

export default function CardReviewImg() {
  return (
    <S.CardReviewImg>
      <div>
        <span>Frente</span>
        <img src={localStorage.getItem('frenteSangria')} alt="Cartão Frente" />
      </div>
      <div>
        <span>Verso</span>
        <img src={localStorage.getItem('versoSangria')} alt="Cartão Verso" />
      </div>
    </S.CardReviewImg>
  );
}
