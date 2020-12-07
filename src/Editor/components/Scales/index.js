import * as S from './styled';

export function ScaleTop() {
  return (
    <S.Wrapper>
      <S.LabelTop>
        0 cm
        <S.Point />
      </S.LabelTop>
      <S.LabelTop className="middle">
        4,5 cm
        <S.Point />
      </S.LabelTop>
      <S.LabelTop className="last">
        9 cm
        <S.Point />
      </S.LabelTop>
    </S.Wrapper>
  );
}

export function ScaleLeft() {
  return (
    <S.WrapperLeft>
      <S.Wrapper className="left">
        <S.LabelTop>
          5 cm
          <S.Point />
        </S.LabelTop>
        <S.LabelTop className="middle">
          2,5 cm
          <S.Point />
        </S.LabelTop>
        <S.LabelTop className="last">
          0 cm
          <S.Point />
        </S.LabelTop>
      </S.Wrapper>
    </S.WrapperLeft>
  );
}
