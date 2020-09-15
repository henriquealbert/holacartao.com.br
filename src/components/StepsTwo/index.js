import * as S from './styled';

export default function StepsTwo() {
  return (
    <S.StepWrapper>
      <S.StepItemInactive>
        <span>1</span>
      </S.StepItemInactive>
      <S.StepItem>
        <span>2</span>
      </S.StepItem>
      <S.StepItemInactive>
        <span>3</span>
      </S.StepItemInactive>
    </S.StepWrapper>
  );
}
