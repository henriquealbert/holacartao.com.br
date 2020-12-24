import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  Text,
  useToast
} from '@chakra-ui/react';
import * as Yup from 'yup';
import Router from 'next/router';

import client from '@/graphql/client';
import MUTATION_FORGOT_PASS from '@/graphql/mutations/forgotPassword';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export default function FormLostPass() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ email }, { resetForm }) => {
    setLoading(true);

    try {
      await client.request(MUTATION_FORGOT_PASS, {
        email
      });
      setLoading(false);
      toast({
        title: 'E-mail de recuperação enviado!',
        description:
          'Acesse seu e-mail e siga as instruções para recuperar sua conta.',
        status: 'info',
        duration: 9000,
        isClosable: true
      });
      setTimeout(() => {
        Router.push('/criar-nova-senha/');
      }, 9000);
    } catch (e) {
      setLoading(false);
      toast({
        title: 'Erro ao realizar sua solicitação.',
        description: 'Este e-mail não existe em nossa base de dados.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      resetForm();
    }
  };

  const validations = Yup.object().shape({
    email: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('O e-mail é um campo obrigatório.')
  });

  return (
    <Box
      my="4rem"
      mx={{ base: '24px', md: 'auto' }}
      maxW={{ base: 'none', md: '1280px' }}
    >
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent={{ base: 'none', md: 'center' }}
      >
        <Text
          as="h1"
          letterSpacing="0.01em"
          color="gray.900"
          fontWeight="500"
          fontSize={{ base: '35px', md: '56px' }}
          lineHeight={{ base: '55px', md: '66px' }}
          mt={{ base: '40px', md: '0' }}
          maxW={{ base: 'none', md: '300px' }}
          mr={{ base: '0', md: '100px' }}
        >
          Esqueceu sua Senha?
        </Text>
        <Icon color="brand.200" viewBox="0 0 100 100" w={100} h={100}>
          <path
            d="M50 8.333C27.025 8.333 8.334 27.025 8.334 50S27.024 91.667 50 91.667c22.975 0 41.667-18.692 41.667-41.667S72.975 8.333 50 8.333zm0 75C31.621 83.333 16.667 68.38 16.667 50c0-18.38 14.954-33.333 33.333-33.333 18.38 0 33.334 14.954 33.334 33.333 0 18.38-14.955 33.333-33.334 33.333z"
            fill="currentColor"
          />
          <path
            d="M35.416 50a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zM64.554 49.942a6.22 6.22 0 100-12.442 6.22 6.22 0 000 12.442zM50 58.333c-12.5 0-16.666 12.5-16.666 12.5h33.333S62.5 58.333 50 58.333z"
            fill="currentColor"
          />
        </Icon>
      </Flex>

      <Text
        fontSize="18px"
        color="gray.500"
        mt="20px"
        mb="50px"
        maxW="500px"
        mx={{ base: '0', md: 'auto' }}
      >
        Não se preoocupe! Digite o e-mail atrelado à sua conta para recuperar
        sua senha. Em seguida clique em “enviar e-mail” e confira a sua caixa de
        entrada.
      </Text>
      <Flex justifyContent={{ base: 'none', md: 'center' }}>
        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          {() => (
            <Box w={{ base: '100%', md: '325px' }}>
              <Form>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      mb="2rem"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id="email"
                        placeholder="Digite seu e-mail"
                        size="lg"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  variant="primary"
                  type="submit"
                  isLoading={loading}
                  loadingText="Enviando..."
                  size="lg"
                  mb="2rem"
                  w="100%"
                >
                  Enviar E-mail
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
      </Flex>
      <Button
        variant="link"
        onClick={() => Router.back()}
        color="gray.900"
        textTransform="normal"
      >
        <Icon as={ChevronLeftIcon} w={10} h={10} /> Voltar
      </Button>
    </Box>
  );
}
