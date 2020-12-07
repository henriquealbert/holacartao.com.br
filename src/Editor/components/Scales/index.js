import * as S from './styled';

export default function Scales() {
  return (
    <S.Wrapper>
      <S.Content>
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
      </S.Content>
      <S.WrapperLeft>
        <S.Content className="left">
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
        </S.Content>
      </S.WrapperLeft>
    </S.Wrapper>
  );
}
