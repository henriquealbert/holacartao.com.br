import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Button,
  Box,
  NumberInput,
  NumberInputField,
  FormErrorMessage
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik';

import { useAppContext } from '@/Contexts/AppContext';

export default function Form1({ setMenu }) {
  const handleSubmit = (dataForm) => {
    setFirstName(dataForm.first_name);
    setLastName(dataForm.last_name);
    setEmail(dataForm.email);
    setAreaCode(dataForm.area_code);
    setPhoneNumber(dataForm.number);
    setMenu('02');
  };

  const {
    setFirstName,
    setLastName,
    setEmail,
    setAreaCode,
    setPhoneNumber,
    firstName,
    lastName,
    email,
    areaCode,
    phoneNumber
  } = useAppContext();

  const validations = Yup.object().shape({
    first_name: Yup.string().required('Este é um campo obrigatório.'),
    last_name: Yup.string().required('Este é um campo obrigatório.'),
    email: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('Este é um campo obrigatório.'),
    area_code: Yup.string()
      .matches(/[1-9]{2}/, 'Formato inválido.')
      .required('Este é um campo obrigatório.'),
    number: Yup.string()
      .matches(
        /(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}/,
        'Formato inválido de telefone.'
      )
      .required('Este é um campo obrigatório.')
  });

  return (
    <Formik
      initialValues={{
        first_name: firstName,
        last_name: lastName,
        email: email,
        area_code: areaCode,
        number: phoneNumber
      }}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {() => (
        <Form>
          <Flex mb="1rem">
            <Field name="first_name" type="text">
              {({ field, form }) => (
                <FormControl
                  mr="2rem"
                  isInvalid={form.errors.first_name && form.touched.first_name}
                >
                  <FormLabel htmlFor="first_name">Nome</FormLabel>
                  <Input {...field} id="first_name" />
                  <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="last_name" type="text">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.last_name && form.touched.last_name}
                >
                  <FormLabel htmlFor="last_name">Sobrenome</FormLabel>
                  <Input {...field} id="last_name" />
                  <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>

          <Flex mb="2rem">
            <Box w="100%" mr="2rem">
              <Field name="email" type="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <Input id="email" {...field} />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Box d="flex" w="100%">
              <Field name="area_code">
                {({ field, form }) => (
                  <FormControl
                    w="30%"
                    mr="2rem"
                    isInvalid={form.errors.area_code && form.touched.area_code}
                  >
                    <FormLabel htmlFor="area_code">DDD</FormLabel>
                    <NumberInput id="area_code" {...field}>
                      <NumberInputField {...field} maxLength="2" />
                    </NumberInput>
                    <FormErrorMessage fontSize="10px" textAlign="center">
                      {form.errors.area_code}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="number" maxLength="9">
                {({ field, form }) => (
                  <FormControl
                    w="100%"
                    isInvalid={form.errors.number && form.touched.number}
                  >
                    <FormLabel htmlFor="number">Telefone</FormLabel>
                    <NumberInput id="number" {...field}>
                      <NumberInputField {...field} maxLength="9" />
                    </NumberInput>
                    <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
          </Flex>
          <Flex mb="4rem" justify="flex-end">
            <Button variant="primary" size="lg" type="submit">
              Próximo Passo
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
