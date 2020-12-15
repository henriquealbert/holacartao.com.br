import 'react-credit-cards/es/styles-compiled.css';
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
  Box,
  useToast,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react';

import { useAppContext } from '@/Contexts/AppContext';
import {
  formatExpirationDate,
  formatFormData,
  formatInputFocus,
  formatInputChange,
  returnFalse,
  guessPaymentMethod
} from './utils';

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
    transactionAmount,
    parcelas,
    setParcelas,
    resetCheckoutState,
    setOrder,
    order
  } = useAppContext();

  const handleInputFocus = (e) => {
    formatInputFocus(e, setFocused);
  };

  const handleInputChange = (e) => {
    formatInputChange(
      e,
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
  const toast = useToast();

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
        ...order.address
      };
      const data = { ...formData, ...otherData };

      axios
        .post(`${API_URL}/orders/payment/credit_card`, data)
        .then((res) => {
          setOrder((prev) => ({ ...prev, ...res.data }));
          setLoading(false);
          setDoSubmit(false);
          resetCheckoutState();
          Router.push('/obrigado/');
        })
        .catch((err) => {
          toast({
            title: 'Ocorreu um erro.',
            description: err.response.message,
            status: 'error',
            duration: 9000,
            isClosable: true
          });
          setDoSubmit(false);
          setLoading(false);
        });
    } else {
      toast({
        title: 'Ocorreu um erro.',
        description: 'Dados incorretos, por favor verifique.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
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
              <NumberInput
                id="cardNumber"
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                pattern="[\d| ]{16,22}"
                max={9999999999999999999999}
                onChange={(value) => {
                  setNumber(value);
                  guessPaymentMethod(value);
                }}
                onFocus={handleInputFocus}
              >
                <NumberInputField
                  data-checkout="cardNumber"
                  autoComplete="off"
                  required
                  placeholder="0000 0000 0000 0000"
                  maxLength={22}
                />
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cardholderName">Titular do Cartão</FormLabel>
              <Input
                id="cardholderName"
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
                <NumberInput
                  id="cardExpirationMonth"
                  required
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  onChange={setMonth}
                  onFocus={handleInputFocus}
                >
                  <NumberInputField
                    data-checkout="cardExpirationMonth"
                    autoComplete="off"
                    required
                    placeholder="MM"
                    maxLength={2}
                  />
                </NumberInput>
                <NumberInput
                  id="cardExpirationYear"
                  required
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  onChange={setYear}
                  onFocus={handleInputFocus}
                >
                  <NumberInputField
                    data-checkout="cardExpirationYear"
                    autoComplete="off"
                    required
                    placeholder="YY"
                    maxLength={2}
                  />
                </NumberInput>
              </Flex>
            </FormControl>
            <FormControl mr="2rem" maxW="20%">
              <FormLabel htmlFor="securityCode">Código CVV</FormLabel>
              <NumberInput
                pattern="\d{3,4}"
                id="securityCode"
                required
                onChange={setCvc}
                onFocus={handleInputFocus}
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
              >
                <NumberInputField
                  data-checkout="securityCode"
                  autoComplete="off"
                  required
                  placeholder="123"
                  maxLength={4}
                />
              </NumberInput>
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
