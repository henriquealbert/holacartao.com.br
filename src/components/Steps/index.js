import * as S from './styled';

export default function Steps() {
  return (
    <S.StepWrapper>
      <S.StepItem>
        <span>1</span>
      </S.StepItem>
      <S.StepItemInactive>
        <span>2</span>
      </S.StepItemInactive>
      <S.StepItemInactive>
        <span>3</span>
      </S.StepItemInactive>
    </S.StepWrapper>
  );
}
