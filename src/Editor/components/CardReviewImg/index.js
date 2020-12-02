import * as S from './styled';

export default function CardReviewImg({ user }) {
  return (
    <S.CardReviewImg>
      <div>
        <span>Frente</span>
        <img
          src={
            user
              ? localStorage.getItem('frenteSangria')
              : localStorage.getItem('frenteFinal')
          }
          alt="Cartão Frente"
        />
      </div>
      <div>
        <span>Verso</span>
        <img
          src={
            user
              ? localStorage.getItem('versoSangria')
              : localStorage.getItem('versoFinal')
          }
          alt="Cartão Verso"
        />
      </div>
    </S.CardReviewImg>
  );
}
