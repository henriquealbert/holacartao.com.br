import {
  FormControl,
  FormLabel,
  Select,
  Flex,
  Input,
  Button,
  Box,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
  useToast,
  Img
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { useAppContext } from '@/Contexts/AppContext';
import { formatCEP } from '@/utils/format';
import Axios from 'axios';
import client from '@/graphql/client';
import MUTATION_UPDATE_ADDRESS from '@/graphql/mutations/updateAddress';

export default function Form2({ setMenu }) {
  // Input
  const { setOrder, order } = useAppContext();

  const toast = useToast();

  const handleSubmit = async ({
    logradouro,
    streetNumber,
    cep,
    bairro,
    cidadeEstado,
    referencia,
    complemento
  }) => {
    const { updateAddress } = await client.request(MUTATION_UPDATE_ADDRESS, {
      input: {
        where: {
          id: order.address.id
        },
        data: {
          logradouro,
          streetNumber: parseInt(streetNumber),
          cep,
          bairro,
          cidadeEstado,
          referencia,
          complemento
        }
      }
    });
    setOrder((prev) => ({ ...prev, address: updateAddress.address }));
    setMenu('03');
  };

  const handleBack = () => {
    setMenu('01');
  };

  function formatCepOnBlur(event, props) {
    const formattedCep = formatCEP(props.values.cep);
    props.setFieldValue('cep', formattedCep);
    props.handleBlur(event);

    Axios.get(`https://brasilapi.com.br/api/cep/v1/${formattedCep}`)
      .then(({ data }) => {
        props.setFieldValue('bairro', data.neighborhood);
        props.setFieldValue('logradouro', data.street);
        props.setFieldValue('cidadeEstado', `${data.city} - ${data.state}`);
        if (
          data.city !== 'Porto Alegre' &&
          data.city !== 'Balneário Camboriú' &&
          data.city !== 'Belo Horizonte' &&
          data.city !== 'São Paulo'
        ) {
          toast({
            title: 'Ocorreu um erro.',
            description: 'Não entregamos para este endereço. Insira outro CEP.',
            status: 'error',
            duration: 9000,
            isClosable: true
          });
          props.resetForm();
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          props.setFieldError('cep', 'CEP não encontrado.');
        }
      });
  }

  const validations = Yup.object().shape({
    logradouro: Yup.string().required('Obrigatório'),
    streetNumber: Yup.number('Somente números.').required('Obrigatório'),
    cep: Yup.string().required('Obrigatório'),
    bairro: Yup.string().required('Obrigatório'),
    cidadeEstado: Yup.string().required('Obrigatório'),
    referencia: Yup.string().required('Obrigatório'),
    complemento: Yup.string()
  });

  return (
    <Formik
      initialValues={{
        logradouro: order?.address?.logradouro
          ? order?.address?.logradouro
          : '',
        streetNumber: order?.address?.streetNumber
          ? order?.address?.streetNumber
          : '',
        cep: order?.address?.cep ? order?.address?.cep : '',
        bairro: order?.address?.bairro ? order?.address?.bairro : '',
        cidadeEstado: order?.address?.cidadeEstado
          ? order?.address?.cidadeEstado
          : '',
        referencia: order?.address?.referencia
          ? order?.address?.referencia
          : '',
        complemento: order?.address?.complemento
          ? order?.address?.complemento
          : ''
      }}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {(props) => (
        <Form>
          <Box>
            <Flex mb="1rem">
              <Field name="cep">
                {({ field, form }) => (
                  <FormControl
                    mr="2rem"
                    w="35%"
                    isInvalid={form.errors.cep && form.touched.cep}
                  >
                    <FormLabel htmlFor="cep">CEP</FormLabel>
                    <Input
                      id="cep"
                      maxLength="9"
                      {...field}
                      onBlur={(event) => formatCepOnBlur(event, props)}
                    />
                    <FormErrorMessage fontSize="12px">
                      {form.errors.cep}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="logradouro">
                {({ field, form }) => (
                  <FormControl
                    mr="2rem"
                    isInvalid={
                      form.errors.logradouro && form.touched.logradouro
                    }
                  >
                    <FormLabel htmlFor="logradouro">
                      Logradouro (rua, avenida e etc.)
                    </FormLabel>
                    <Input id="logradouro" {...field} />
                    <FormErrorMessage fontSize="12px">
                      {form.errors.logradouro}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="streetNumber">
                {({ field, form }) => (
                  <FormControl
                    w="25%"
                    isInvalid={
                      form.errors.streetNumber && form.touched.streetNumber
                    }
                  >
                    <FormLabel htmlFor="streetNumber">Número</FormLabel>
                    <NumberInput id="streetNumber" {...field}>
                      <NumberInputField maxLength="6" {...field} />
                    </NumberInput>
                    <FormErrorMessage fontSize="12px">
                      {form.errors.streetNumber}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Flex mb="1rem">
              <Field name="complemento">
                {({ field, form }) => (
                  <FormControl
                    mr="2rem"
                    isInvalid={
                      form.errors.complemento && form.touched.complemento
                    }
                  >
                    <FormLabel htmlFor="complemento">Complemento</FormLabel>
                    <Input id="complemento" {...field} />
                    <FormErrorMessage fontSize="12px">
                      {form.errors.complemento}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="referencia">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.referencia && form.touched.referencia
                    }
                  >
                    <FormLabel htmlFor="referencia">Referência</FormLabel>
                    <Input id="referencia" {...field} />
                    <FormErrorMessage fontSize="12px">
                      {form.errors.referencia}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Flex mb="3rem">
              <Field name="bairro">
                {({ field, form }) => (
                  <FormControl
                    mr="2rem"
                    isInvalid={form.errors.bairro && form.touched.bairro}
                  >
                    <FormLabel htmlFor="bairro">Bairro</FormLabel>
                    <Input id="bairro" {...field} />
                    <FormErrorMessage fontSize="12px">
                      {form.errors.bairro}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="cidadeEstado">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.cidadeEstado && form.touched.cidadeEstado
                    }
                  >
                    <FormLabel htmlFor="cidadeEstado">
                      Cidade e Estado
                    </FormLabel>
                    <Select
                      id="cidadeEstado"
                      {...field}
                      placeholder="Selecione a Cidade e o Estado..."
                    >
                      <option value="Balneário Camboriú - SC">
                        Balneário Camboriú - SC
                      </option>
                      <option value="Belo Horizonte - MG">
                        Belo Horizonte - MG
                      </option>
                      <option value="Porto Alegre - RS">
                        Porto Alegre - RS
                      </option>
                      <option value="São Paulo - SP">São Paulo - SP</option>
                    </Select>
                    <FormErrorMessage fontSize="12px">
                      {form.errors.cidadeEstado}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>
          </Box>

          <Flex mb="4rem" justify="space-between">
            <Button
              bg="none"
              _hover={{ bg: 'none', textDecoration: 'underline' }}
              textTransform="lowercase"
              fontSize="13px"
              fontFamily="Montserrat"
              onClick={handleBack}
              type="button"
              display="block"
            >
              voltar
              <Img src="/images/arrow-checkout.svg" alt="Voltar" />
            </Button>
            <Button variant="primary" size="lg" type="submit">
              Próximo Passo
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
