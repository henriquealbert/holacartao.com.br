import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import Axios from 'axios';

import { useAppContext } from '@/Contexts/AppContext';
import { formatDocNumber } from '@/utils/format';

export default function Boleto() {
  const {
    docType,
    docNumber,
    setDocType,
    setDocNumber,
    transactionAmount,
    setOrder,
    order
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const formatDocNumberOnBlur = (event, props) => {
    const formattedDoc = formatDocNumber(props.values.docNumber);
    props.setFieldValue('docNumber', formattedDoc);
    props.handleBlur(event);
    formattedDoc.length <= 14
      ? props.setFieldValue('docType', 'CPF')
      : props.setFieldValue('docType', 'CNPJ');
  };

  const handleSubmit = (dataForm) => {
    setLoading(true);
    setDocType(dataForm.docType);
    setDocNumber(dataForm.docNumber);

    const data = { ...dataForm, ...order.address };

    Axios.post(`${API_URL}/orders/payment_boleto`, data)
      .then((res) => {
        setOrder((prev) => ({ ...prev, ...res.data }));
        setLoading(false);
        Router.push('/obrigado/');
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });

    setLoading(false);
  };

  const validations = Yup.object().shape({
    docType: Yup.string().required('Obrigatório'),
    docNumber: Yup.string()
      .min(11, 'Documento inválido')
      .required('Obrigatório')
  });
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        docType: docType ? docType : 'CPF',
        docNumber: docNumber,
        transactionAmount: transactionAmount
      }}
      validationSchema={validations}
    >
      {(props) => (
        <Form>
          <Flex mt="1rem">
            <Field name="docType">
              {({ field, form }) => (
                <FormControl
                  mr="2rem"
                  isInvalid={form.errors.docType && form.touched.docType}
                >
                  <FormLabel htmlFor="docType">Tipo de documento</FormLabel>
                  <Select
                    id="docType"
                    data-checkout="docType"
                    {...field}
                    required
                  >
                    <option value="CPF">CPF</option>
                    <option value="CNPJ">CNPJ</option>
                  </Select>
                  <FormErrorMessage fontSize="12px">
                    {form.errors.docType}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="docNumber">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.docNumber && form.touched.docNumber}
                >
                  <FormLabel htmlFor="docNumber">Número do documento</FormLabel>
                  <Input
                    id="docNumber"
                    data-checkout="docNumber"
                    placeholder="CPF ou CNPJ"
                    maxLength="18"
                    {...field}
                    required
                    onBlur={(event) => formatDocNumberOnBlur(event, props)}
                  />
                  <FormErrorMessage fontSize="12px">
                    {form.errors.docNumber}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>

          <Flex mt="2rem" justifyContent="flex-end">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              isLoading={loading}
              loadingText="Processando..."
              mb="1rem"
            >
              Gerar Boleto
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
