import { useState } from 'react';
import Card from 'react-credit-cards';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from './utils';

import 'react-credit-cards/es/styles-compiled.css';

import * as S from './styled';

export default function CardComponent() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [focused, setFocused] = useState('');
  const [formData, setFormData] = useState(null);

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setBandeira(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === 'name') {
      setName(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    console.log(formData);

    setFormData(formData);
  };

  return (
    <S.CardWrapper>
      <S.CardContainer>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
      </S.CardContainer>
      <S.FormWrapper onSubmit={handleSubmit}>
        <S.FormGroup>
          <div>
            <label htmlFor="number">Número do Cartão</label>
            <S.Input
              type="tel"
              name="number"
              placeholder="0000 0000 0000 0000"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div>
            <label htmlFor="expiry">Data Expiração</label>
            <S.MiniInput
              type="tel"
              name="expiry"
              placeholder="MM/AA"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </S.FormGroup>
        <S.FormGroup>
          <div>
            <label htmlFor="name">Nome no Cartão</label>
            <S.Input
              type="text"
              name="name"
              placeholder="Ex: João da Silva"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div>
            <label htmlFor="cvc">Código CVV</label>
            <S.MiniInput
              type="tel"
              name="cvc"
              placeholder="123"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="parcelamento">Parcelamento em</label>
          <select name="parcelamento" id="parcelamento" required>
            <option value="01">01</option>
            <option value="02">02</option>
          </select>
        </S.FormGroup>
        <input type="hidden" name="issuer" value={bandeira} />
        <div>
          <button>Pagar</button>
        </div>
      </S.FormWrapper>
      {formData && (
        <div>
          {formatFormData(formData).map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      )}
    </S.CardWrapper>
  );
}
