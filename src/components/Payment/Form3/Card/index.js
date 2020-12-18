import 'react-credit-cards/es/styles-compiled.css';
import Card from 'react-credit-cards';
import { useState, useRef } from 'react';
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
  returnFalse,
  guessPaymentMethod
} from './utils';
import { formatDocNumber } from '@/utils/format';
import useScript from '@/hooks/useScript';

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
  const formRef = useRef();
  // FormSubmit
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Mercado Pago Scripts
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_MERCADOPAGO;
  useScript('https://www.mercadopago.com/v2/security.js');
  const status = useScript(
    'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
  );
  if (status === 'ready') {
    window.Mercadopago.setPublishableKey(PUBLIC_KEY);
    window.Mercadopago.clearSession();
    window.Mercadopago.getIdentificationTypes();
    guessPaymentMethod();
  }

  const handleInputFocus = (e) => {
    formatInputFocus(e, setFocused);
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getCardToken(event) {
    event.preventDefault();
    setLoading(true);

    let form = formRef.current;
    form.elements['docNumber'].value = form.elements['docNumber'].value.replace(
      /[^0-9]/g,
      ''
    );
    window.Mercadopago.createToken(form, setCardTokenAndPay);
  }

  function setCardTokenAndPay(status, response) {
    if (status == 200 || status == 201) {
      let form = formRef.current;
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
          resetCheckoutState();
          Router.push('/obrigado/');
        })
        .catch((err) => {
          resetCheckoutState();
          setLoading(false);
          window.Mercadopago.clearSession();
          toast({
            title: 'Ocorreu um erro.',
            description: err.response?.message,
            status: 'error',
            duration: 9000,
            isClosable: true
          });
        });
    } else {
      resetCheckoutState();
      window.Mercadopago.clearSession();
      setLoading(false);
      toast({
        title: 'Ocorreu um erro.',
        description: response.cause.map((item) => `${item?.description} `),
        status: 'error',
        duration: 9000,
        isClosable: true
      });
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
        <form ref={formRef} onSubmit={getCardToken} id="paymentForm">
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
                pattern="[\d| ]{15,22}"
                max={9999999999999999999999}
                onChange={(value) => {
                  setNumber(value);
                  guessPaymentMethod(value);
                }}
                value={number}
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
                onChange={({ target }) => setName(target.value)}
                onFocus={handleInputFocus}
                value={name}
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
                  value={month}
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
                  value={year}
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
                value={cvc}
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
                onChange={({ target }) => setDocType(target.value)}
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
                onChange={({ target }) => {
                  const formattedDoc = formatDocNumber(target.value);
                  setDocNumber(formattedDoc);
                  formattedDoc.length <= 14
                    ? setDocType('CPF')
                    : setDocType('CNPJ');
                }}
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
            <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
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
