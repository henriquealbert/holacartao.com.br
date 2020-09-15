import * as S from './styled';

export default function StepsThree() {
  return (
    <S.StepWrapper>
      <S.StepItemInactive>
        <span>1</span>
      </S.StepItemInactive>
      <S.StepItemInactive>
        <span>2</span>
      </S.StepItemInactive>
      <S.StepItem>
        <span>3</span>
      </S.StepItem>
    </S.StepWrapper>
  );
}
