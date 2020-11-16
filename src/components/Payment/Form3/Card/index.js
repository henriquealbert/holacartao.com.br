import Card from 'react-credit-cards';
import { useAppContext } from '../../../../Contexts/AppContext';
import useScript from '../../../../hooks/useScript';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

import {
  formatExpirationDate,
  formatFormData,
  formatInputFocus,
  formatInputChange,
  returnFalse,
  guessPaymentMethod
} from './utils';

import {
  FormControl,
  FormLabel,
  Select,
  Flex,
  Input,
  Button,
  Box
} from '@chakra-ui/react';

import 'react-credit-cards/es/styles-compiled.css';

import * as S from './styled';

export default function CardComponent() {
  const {
    number,
    setNumber,
    name,
    setName,
    month,
    setMonth,
    year,
    setYear,
    cvc,
    setCvc,
    focused,
    setFocused,
    docType,
    setDocType,
    docNumber,
    setDocNumber,
    firstName,
    lastName,
    email,
    areaCode,
    phoneNumber,
    transactionAmount,
    parcelas,
    setParcelas
  } = useAppContext();

  const handleInputFocus = ({ target }) => {
    formatInputFocus(target, setFocused);
  };

  const handleInputChange = ({ target }) => {
    formatInputChange(
      target,
      setNumber,
      setCvc,
      setName,
      setMonth,
      setYear,
      setDocType,
      setDocNumber
    );
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_MERCADOPAGO;

  // Mercado Pago Scripts
  useScript('https://www.mercadopago.com/v2/security.js');
  const status = useScript(
    'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
  );

  if (status === 'ready') {
    window.Mercadopago.setPublishableKey(PUBLIC_KEY);
    window.Mercadopago.getIdentificationTypes();
    guessPaymentMethod();
  }

  // FormSubmit
  const [doSubmit, setDoSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  function getCardToken(event) {
    event.preventDefault();
    setLoading(true);

    if (!doSubmit) {
      const form = document.getElementById('paymentForm');
      window.Mercadopago.createToken(form, setCardTokenAndPay);
      return false;
    }
  }

  function setCardTokenAndPay(status, response) {
    if (status == 200 || status == 201) {
      setDoSubmit(true);
      let form = document.getElementById('paymentForm');
      const formData = formatFormData(form);
      const otherData = {
        token: response.id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        area_code: areaCode,
        phoneNumber: phoneNumber,
        transactionAmount: transactionAmount
      };
      const data = { ...formData, ...otherData };

      axios
        .post(`${API_URL}/orders/payment`, data)
        .then((res) => {
          Router.push({
            pathname: '/obrigado/',
            query: { id: res.data.id, status: res.data.status }
          });
          setLoading(false);
          setDoSubmit(false);
        })
        .catch((err) => {
          alert(err.message);
          setDoSubmit(false);
          setLoading(false);
        });
    } else {
      alert('Dados incorretos, por favor verifique.');
      setLoading(false);
    }
  }

  return (
    <Flex>
      <Box mr="2rem">
        <Card
          number={number}
          name={name}
          expiry={formatExpirationDate(month + year)}
          cvc={cvc}
          focused={focused}
        />
      </Box>
      <Box>
        <form onSubmit={getCardToken} id="paymentForm">
          <Flex>
            <FormControl>
              <FormLabel htmlFor="cardholderName">Titular do Cartão</FormLabel>
              <Input
                id="cardholderName"
                name="cardholderName"
                data-checkout="cardholderName"
                type="text"
                placeholder="Ex: João da Silva"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormControl>
            <Flex mb="1rem">
              <FormControl mr="2rem">
                <FormLabel htmlFor="docType">Tipo de documento</FormLabel>
                <Select
                  id="docType"
                  name="docType"
                  data-checkout="docType"
                  type="text"
                  value={docType}
                  onChange={handleInputChange}
                ></Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="docNumber">Número do documento</FormLabel>
                <Input
                  id="docNumber"
                  name="docNumber"
                  data-checkout="docNumber"
                  type="text"
                  value={docNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Flex>
            <Box>
              <FormControl>
                <FormLabel htmlFor="cardExpirationMonth">
                  Data de vencimento
                </FormLabel>
                <Flex>
                  <Input
                    type="text"
                    name="cardExpirationMonth"
                    placeholder="MM"
                    id="cardExpirationMonth"
                    data-checkout="cardExpirationMonth"
                    onPaste={returnFalse}
                    onCopy={returnFalse}
                    onCut={returnFalse}
                    onDrag={returnFalse}
                    onDrop={returnFalse}
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <Input
                    type="text"
                    name="cardExpirationYear"
                    placeholder="YY"
                    id="cardExpirationYear"
                    data-checkout="cardExpirationYear"
                    onPaste={returnFalse}
                    onCopy={returnFalse}
                    onCut={returnFalse}
                    onDrag={returnFalse}
                    onDrop={returnFalse}
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Flex>
              </FormControl>
            </Box>
          </Flex>
          <Flex>
            <FormControl>
              <FormLabel htmlFor="cardNumber">Número do Cartão</FormLabel>
              <Input
                placeholder="0000 0000 0000 0000"
                pattern="[\d| ]{16,22}"
                required
                type="text"
                id="cardNumber"
                data-checkout="cardNumber"
                name="cardNumber"
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                autoComplete="off"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="securityCode">Código CVV</FormLabel>
              <Input
                name="securityCode"
                placeholder="123"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                id="securityCode"
                data-checkout="securityCode"
                type="text"
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                autoComplete="off"
              />
            </FormControl>
          </Flex>
          <S.FormGroup>
            <FormLabel htmlFor="installments">Parcelamento em</FormLabel>
            <Select
              type="text"
              id="installments"
              name="installments"
              onChange={({ target }) => setParcelas(target.value)}
              value={parcelas}
            ></Select>
          </S.FormGroup>
          <div style={{ display: 'none' }}>
            <select
              type="hidden"
              id="issuer"
              name="issuer"
              data-checkout="issuer"
            ></select>
            <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
            <input
              type="hidden"
              name="transactionAmount"
              id="transactionAmount"
              value={transactionAmount}
            />
          </div>
          <Box>
            <Button type="submit">{loading ? 'Carregando...' : 'Pagar'}</Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
}
