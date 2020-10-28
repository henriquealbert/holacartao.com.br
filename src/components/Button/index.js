import * as S from './styled';

export default function Button({
  children,
  onClick,
  onSubmit,
  type,
  disabled
}) {
  return (
    <S.Wrapper
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
    >
      {children}
    </S.Wrapper>
  );
}
