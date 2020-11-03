import * as S from './styled';

export default function PricingRadio({ id, value, defaultChecked }) {
  return (
    <S.RadioGroup>
      <input
        type="radio"
        id={id}
        name="radio-group"
        value={value}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}></label>
    </S.RadioGroup>
  );
}
