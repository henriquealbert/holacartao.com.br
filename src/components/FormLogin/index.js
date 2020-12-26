import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useToast
} from '@chakra-ui/react';
import * as Yup from 'yup';

import { login } from '@/lib/auth';
import AppContext from '@/Contexts/AppContext';

export default function FormLogin() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { setUser } = useContext(AppContext);

  const validations = Yup.object().shape({
    identifier: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('O e-mail é um campo obrigatório.'),
    password: Yup.string()
      .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
      .required('A senha é um campo obrigatório.')
  });

  const handleSubmit = ({ identifier, password }, { resetForm }) => {
    setLoading(true);
    login(identifier, password)
      .then((res) => {
        setLoading(false);
        // set authed User in global context to update header/app state
        setUser(res.data.user);
      })
      .catch(() => {
        setLoading(false);
        toast({
          title: 'Erro ao realizar seu login.',
          description: 'E-mail ou senha inválidos, tente novamente.',
          status: 'error',
          duration: 9000,
          isClosable: true
        });
        resetForm();
      });
  };

  return (
    <Box
      my="4rem"
      mx={{ base: '24px', md: 'auto' }}
      maxW={{ base: 'none', md: '1280px' }}
    >
      <Text
        as="h1"
        fontSize="45px"
        lineHeight="48px"
        fontWeight="500"
        textAlign="center"
        color="brand.200"
        mb="1rem"
      >
        Bom ver você novamente.
      </Text>

      <Flex justifyContent={{ base: 'none', md: 'center' }} mt="2rem">
        <Formik
          initialValues={{
            identifier: '',
            password: ''
          }}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          {() => (
            <Box w={{ base: '100%', md: '325px' }}>
              <Form>
                <Field name="identifier">
                  {({ field, form }) => (
                    <FormControl
                      mb="1rem"
                      isInvalid={
                        form.errors.identifier && form.touched.identifier
                      }
                    >
                      <Input
                        {...field}
                        id="identifier"
                        placeholder="E-mail Cadastrado"
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="email"
                      />
                      <FormErrorMessage justifyContent="center">
                        {form.errors.identifier}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      mb="1rem"
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        {...field}
                        id="password"
                        placeholder="Senha"
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="password"
                      />
                      <FormErrorMessage justifyContent="center">
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Text textAlign="center" color="gray.500" mb="2rem">
                  Esqueceu sua senha?{' '}
                  <Link href="/esqueceu-senha/">
                    <Text
                      as="a"
                      cursor="pointer"
                      _hover={{ textDecoration: 'underline' }}
                      color="blue.500"
                    >
                      clique aqui
                    </Text>
                  </Link>
                </Text>

                <Button
                  variant="primary"
                  type="submit"
                  isLoading={loading}
                  loadingText="Carregando..."
                  size="lg"
                  mb="2rem"
                  w="100%"
                >
                  Fazer Login
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
      </Flex>
    </Box>
  );
}
