import * as S from './styled';

export default function PricingRadio({ id, value, checked }) {
  return (
    <S.RadioGroup>
      <input
        type="radio"
        id={id}
        name="radio-group"
        value={value}
        defaultChecked={checked}
      />
      <label htmlFor={id}></label>
    </S.RadioGroup>
  );
}
