import * as S from './styled';

export const BasicPrice = () => {
  return (
    <S.OptionItem>
      <h4>Basic</h4>
      <S.Border>
        <S.BoxOption>
          <S.Quantity>
            100<span>cartões</span>
          </S.Quantity>
          <img src="/images/arrow-right.svg" alt="Arrow Right" />
          <S.Price>
            <span>R$</span>79,90
          </S.Price>
        </S.BoxOption>
      </S.Border>
    </S.OptionItem>
  );
};

export const StandardPrice = ({ home }) => {
  return (
    <S.OptionItem>
      <S.Medalha>
        <img src="/images/medalha.svg" alt="Recomendado" />
      </S.Medalha>
      <h4>Standard</h4>
      <S.Border gradient="standard">
        <S.BoxOption home={home}>
          <S.Quantity>
            250<span>cartões</span>
          </S.Quantity>
          <img src="/images/arrow-right.svg" alt="Arrow Right" />
          <S.Price>
            <span>R$</span>89,90
          </S.Price>
        </S.BoxOption>
        {home ? (
          <S.CustoBeneficio>melhor custo benefício! </S.CustoBeneficio>
        ) : (
          ''
        )}
      </S.Border>
    </S.OptionItem>
  );
};

export const CinquecentoPrice = () => {
  return (
    <S.OptionItem>
      <h4>Cinque­cento</h4>
      <S.Border gradient="cinquecento">
        <S.BoxOption>
          <S.Quantity>
            500<span>cartões</span>
          </S.Quantity>
          <img src="/images/arrow-right.svg" alt="Arrow Right" />
          <S.Price>
            <span>R$</span>119,90
          </S.Price>
        </S.BoxOption>
      </S.Border>
    </S.OptionItem>
  );
};
