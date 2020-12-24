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
import { useState } from 'react';
import Router from 'next/router';
import * as Yup from 'yup';

import client from '@/graphql/client';
import MUTATION_RESET_PASS from '@/graphql/mutations/resetPassword';

export default function FormRecoveryPass({ query }) {
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    { code, password, passwordConfirmation },
    { resetForm }
  ) => {
    setLoading(true);

    try {
      await client.request(MUTATION_RESET_PASS, {
        code: code,
        password: password,
        passwordConfirmation: passwordConfirmation
      });
      setLoading(false);
      toast({
        title: 'Conta recuperada!',
        description: 'Sua senha foi alterada com sucesso!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
      setTimeout(() => {
        Router.push('/login/');
      }, 9000);
    } catch (e) {
      setLoading(false);
      toast({
        title: 'Erro ao realizar sua solicitação.',
        description:
          'Token Inválido. Acesse a página de recuperação de conta para gerar um novo Token.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      resetForm();
    }
  };

  const validations = Yup.object().shape({
    code: Yup.string().required('O Token é um campo obrigatório.'),
    password: Yup.string()
      .min(8, 'Sua nova senha deve ter no mínimo 8 caracteres.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Sua nova senha deve conter pelo menos uma letra e um número.'
      )
      .required('A nova senha é um campo obrigatório.'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
      .required('A confirmação de senha é um campo obrigatório.')
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
          maxW={{ base: 'none', md: '350px' }}
          mr={{ base: '0', md: '100px' }}
        >
          Recuperação de Senha
        </Text>
        <Icon color="brand.200" viewBox="0 0 100 100" w={100} h={100}>
          <path
            d="M50 8.333C27.025 8.333 8.334 27.025 8.334 50S27.024 91.667 50 91.667c22.975 0 41.667-18.692 41.667-41.667S72.975 8.333 50 8.333zm0 75C31.621 83.333 16.667 68.38 16.667 50c0-18.38 14.954-33.333 33.333-33.333 18.38 0 33.334 14.954 33.334 33.333 0 18.38-14.955 33.333-33.334 33.333z"
            fill="currentColor"
          />
          <path
            d="M35.416 50a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zM64.554 49.942a6.22 6.22 0 100-12.442 6.22 6.22 0 000 12.442zM50 75c16.666 0 20.833-16.667 20.833-16.667H29.167S33.332 75 50 75z"
            fill="currentColor"
          />
        </Icon>
      </Flex>

      <Text
        fontSize="18px"
        color="gray.500"
        mt="20px"
        mb="2rem"
        textAlign={{ base: 'left', md: 'center' }}
      >
        Insira o TOKEN que recebeu em seu e-mail e crie sua nova senha.
      </Text>

      <Flex justifyContent={{ base: 'none', md: 'center' }} minW="305px">
        <Formik
          initialValues={{
            code: query.code ? query.code : '',
            password: '',
            passwordConfirmation: ''
          }}
          validationSchema={validations}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {() => (
            <Box w={{ base: '100%', md: '325px' }}>
              <Form>
                <Field name="code">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.code && form.touched.code}
                      mb="1rem"
                      w="100%"
                    >
                      <Input
                        {...field}
                        id="code"
                        placeholder="TOKEN"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                      />
                      <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mb="1rem"
                    >
                      <Input
                        {...field}
                        id="password"
                        placeholder="Nova Senha"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="password"
                        w="100%"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="passwordConfirmation">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.passwordConfirmation &&
                        form.touched.passwordConfirmation
                      }
                      mb="2rem"
                    >
                      <Input
                        {...field}
                        id="passwordConfirmation"
                        placeholder="Cofirmar Senha"
                        border="3px solid"
                        borderColor="gray.500"
                        h="50px"
                        type="password"
                        w="100%"
                      />
                      <FormErrorMessage>
                        {form.errors.passwordConfirmation}
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
                  Alterar Senha
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
      </Flex>
    </Box>
  );
}
