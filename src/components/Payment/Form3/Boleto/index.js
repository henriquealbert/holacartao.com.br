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

import { useAppContext } from '@/Contexts/AppContext';
import { formatDocNumber } from '@/utils/format';
import Axios from 'axios';

export default function Boleto() {
  const {
    docType,
    docNumber,
    setDocType,
    setDocNumber,
    transactionAmount
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
    console.log(dataForm);

    Axios.post(`${API_URL}/orders/payment_boleto`, dataForm)
      .then((res) => {
        // Router.push({
        //   pathname: '/obrigado/',
        //   query: { id: res.data.id, status: res.data.status }
        // });
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });

    setLoading(false);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        docType: docType ? docType : 'CPF',
        docNumber: docNumber,
        transactionAmount: transactionAmount,
        paymentMethodId: 'ticket'
      }}
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
                  <Select id="docType" data-checkout="docType" {...field}>
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
              Pagar
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
