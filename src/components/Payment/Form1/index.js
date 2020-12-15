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
import client from '@/graphql/client';
import MUTATION_CREATE_ADDRESS from '@/graphql/mutations/createAddress';
import MUTATION_UPDATE_ADDRESS from '@/graphql/mutations/updateAddress';

export default function Form1({ setMenu }) {
  const { setOrder, order } = useAppContext();

  const handleSubmit = async ({
    firstName,
    lastName,
    email,
    areaCode,
    phoneNumber
  }) => {
    if (order.address.id) {
      const { updateAddress } = await client.request(MUTATION_UPDATE_ADDRESS, {
        input: {
          where: {
            id: order.address.id
          },
          data: {
            firstName,
            lastName,
            email,
            areaCode,
            phoneNumber
          }
        }
      });
      setOrder((prev) => ({ ...prev, address: updateAddress.address }));
      setMenu('02');
    }

    if (!order.address.id) {
      const { createAddress } = await client.request(MUTATION_CREATE_ADDRESS, {
        input: {
          data: {
            order: order.order.id,
            firstName,
            lastName,
            email,
            areaCode,
            phoneNumber
          }
        }
      });
      setOrder((prev) => ({ ...prev, address: createAddress.address }));
      setMenu('02');
    }
  };

  const validations = Yup.object().shape({
    firstName: Yup.string().required('Este é um campo obrigatório.'),
    lastName: Yup.string().required('Este é um campo obrigatório.'),
    email: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('Este é um campo obrigatório.'),
    areaCode: Yup.string()
      .matches(/[1-9]{2}/, 'Formato inválido.')
      .required('Este é um campo obrigatório.'),
    phoneNumber: Yup.string()
      .matches(
        /(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}/,
        'Formato inválido de telefone.'
      )
      .required('Este é um campo obrigatório.')
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        areaCode: '',
        phoneNumber: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {() => (
        <Form>
          <Flex mb="1rem">
            <Field name="firstName" type="text">
              {({ field, form }) => (
                <FormControl
                  mr="2rem"
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <FormLabel htmlFor="firstName">Nome</FormLabel>
                  <Input {...field} id="firstName" />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastName" type="text">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel htmlFor="lastName">Sobrenome</FormLabel>
                  <Input {...field} id="lastName" />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
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
              <Field name="areaCode">
                {({ field, form }) => (
                  <FormControl
                    w="30%"
                    mr="2rem"
                    isInvalid={form.errors.areaCode && form.touched.areaCode}
                  >
                    <FormLabel htmlFor="areaCode">DDD</FormLabel>
                    <NumberInput id="areaCode" {...field}>
                      <NumberInputField {...field} maxLength="2" />
                    </NumberInput>
                    <FormErrorMessage fontSize="10px" textAlign="center">
                      {form.errors.areaCode}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phoneNumber" maxLength="9">
                {({ field, form }) => (
                  <FormControl
                    w="100%"
                    isInvalid={
                      form.errors.phoneNumber && form.touched.phoneNumber
                    }
                  >
                    <FormLabel htmlFor="phoneNumber">Telefone</FormLabel>
                    <NumberInput id="phoneNumber" {...field}>
                      <NumberInputField {...field} maxLength="9" />
                    </NumberInput>
                    <FormErrorMessage>
                      {form.errors.phoneNumber}
                    </FormErrorMessage>
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
