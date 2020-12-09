import Card from 'react-credit-cards';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import {
  FormControl,
  FormLabel,
  Select,
  Flex,
  Input,
  Button,
  Box
} from '@chakra-ui/react';

import { useAppContext } from '@/Contexts/AppContext';
import {
  formatExpirationDate,
  formatFormData,
  formatInputFocus,
  formatInputChange,
  returnFalse
} from './utils';
import 'react-credit-cards/es/styles-compiled.css';

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
    setParcelas,
    cep,
    logradouro,
    streetNumber,
    resetCheckoutState
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
        transactionAmount: transactionAmount,
        address: {
          zip_code: cep,
          street_name: logradouro,
          street_number: streetNumber
        }
      };
      const data = { ...formData, ...otherData };

      axios
        .post(`${API_URL}/orders/payment/credit_card`, data)
        .then((res) => {
          Router.push({
            pathname: '/obrigado/',
            query: { id: res.data.id, status: res.data.status }
          });
          setLoading(false);
          setDoSubmit(false);
          resetCheckoutState();
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
    <Box>
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
          <Flex mt="1rem">
            <FormControl mr="2rem">
              <FormLabel htmlFor="cardNumber">Número do Cartão</FormLabel>
              <Input
                placeholder="0000 0000 0000 0000"
                pattern="[\d| ]{16,22}"
                type="text"
                id="cardNumber"
                data-checkout="cardNumber"
                name="cardNumber"
                autoComplete="off"
                required
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormControl>
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
          </Flex>

          <Flex mt="1rem">
            <FormControl mr="1.5rem" maxW="25%">
              <FormLabel htmlFor="cardExpirationMonth">
                Data de vencimento
              </FormLabel>
              <Flex>
                <Input
                  type="number"
                  name="cardExpirationMonth"
                  placeholder="MM"
                  id="cardExpirationMonth"
                  data-checkout="cardExpirationMonth"
                  autoComplete="off"
                  required
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <Input
                  type="number"
                  name="cardExpirationYear"
                  placeholder="YY"
                  id="cardExpirationYear"
                  data-checkout="cardExpirationYear"
                  autoComplete="off"
                  required
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Flex>
            </FormControl>
            <FormControl mr="2rem" maxW="20%">
              <FormLabel htmlFor="securityCode">Código CVV</FormLabel>
              <Input
                name="securityCode"
                placeholder="123"
                pattern="\d{3,4}"
                id="securityCode"
                data-checkout="securityCode"
                type="number"
                autoComplete="off"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="installments">Parcelamento em</FormLabel>
              <Select
                type="text"
                id="installments"
                name="installments"
                placeholder="Selecione o valor..."
                required
                onChange={({ target }) => setParcelas(target.value)}
                value={parcelas}
              ></Select>
            </FormControl>
          </Flex>

          <Flex mt="1rem">
            <FormControl mr="2rem">
              <FormLabel htmlFor="docType">Tipo de documento</FormLabel>
              <Select
                id="docType"
                name="docType"
                data-checkout="docType"
                required
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
                required
                placeholder="CPF ou CNPJ"
                value={docNumber}
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>

          <Box display="none">
            <select
              type="hidden"
              id="issuer"
              name="issuer"
              data-checkout="issuer"
            ></select>
            <input
              type="hidden"
              name="paymentMethodId"
              id="paymentMethodId"
              value="credit_card"
            />
            <input
              type="hidden"
              name="transactionAmount"
              id="transactionAmount"
              value={transactionAmount}
            />
          </Box>
          <Flex mt="2rem" justifyContent="flex-end">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              isLoading={loading}
              loadingText="Processando..."
            >
              Pagar
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
