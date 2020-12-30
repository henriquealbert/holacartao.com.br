import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Text,
  useToast
} from '@chakra-ui/react';

import { registerUser } from '@/lib/auth';
import AppContext from '@/Contexts/AppContext';

import { occupations } from './utils/occupations';
import { validations } from './utils/validations';

export default function FormCreate() {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AppContext);
  const toast = useToast();

  const handleSubmit = ({ username, email, password, occupation, terms }) => {
    setLoading(true);

    registerUser(username, email, password, occupation, terms)
      .then((res) => {
        setLoading(false);
        setUser(res.data.user);
      })
      .catch((error) => {
        setLoading(false);

        const errorMessage = error.response.data.message[0].messages[0].message;
        if (errorMessage === 'Email is already taken.') {
          toast({
            title: 'Erro ao tentar criar sua Conta.',
            description: 'Já existe um usuário cadastrado com este e-mail.',
            status: 'error',
            duration: 9000,
            isClosable: true
          });
        }
        if (errorMessage === 'Username already taken') {
          toast({
            title: 'Erro ao tentar criar sua Conta.',
            description: 'Este nome de usuário não está disponível.',
            status: 'error',
            duration: 9000,
            isClosable: true
          });
        }
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
        Cadastre-se
      </Text>
      <Text textAlign="center" color="gray.500" mb="2rem">
        Já tem uma conta?{' '}
        <Link href="/login/">
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

      <Flex justifyContent={{ base: 'none', md: 'center' }} mt="2rem">
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            occupation: '',
            terms: false
          }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          {() => (
            <Box w={{ base: '100%', md: '325px' }}>
              <Form>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      mb="1rem"
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        {...field}
                        id="username"
                        placeholder="Nome de Usuário"
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="text"
                      />
                      <FormErrorMessage justifyContent="center">
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      mb="1rem"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id="email"
                        placeholder="E-mail"
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="email"
                      />
                      <FormErrorMessage justifyContent="center">
                        {form.errors.email}
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

                <Field name="occupation">
                  {({ field, form }) => (
                    <FormControl
                      mb="1rem"
                      isInvalid={
                        form.errors.occupation && form.touched.occupation
                      }
                    >
                      <Select
                        {...field}
                        id="occupation"
                        placeholder="Selecione uma ocupação..."
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                      >
                        {occupations.map((occupation) => {
                          return (
                            <option key={occupation} value={occupation}>
                              {occupation}
                            </option>
                          );
                        })}
                      </Select>
                      <FormErrorMessage justifyContent="center">
                        {form.errors.occupation}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="terms">
                  {({ field, form }) => (
                    <FormControl
                      mb="2rem"
                      isInvalid={form.errors.terms && form.touched.terms}
                    >
                      <Checkbox
                        {...field}
                        id="terms"
                        size="lg"
                        color="gray.500"
                        textAlign="center"
                      >
                        Li e aceito os{' '}
                        <Link href="/politica-privacidade/">
                          <Text
                            as="a"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                            color="blue.500"
                          >
                            Termos de Uso
                          </Text>
                        </Link>
                      </Checkbox>
                      <FormErrorMessage justifyContent="center">
                        {form.errors.terms}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  variant="primary"
                  type="submit"
                  isLoading={loading}
                  loadingText="Carregando..."
                  size="lg"
                  mb="2rem"
                  w="100%"
                >
                  Cadastrar
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
      </Flex>
    </Box>
  );
}
