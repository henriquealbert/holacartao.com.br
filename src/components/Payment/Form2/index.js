import {
  FormControl,
  FormLabel,
  Select,
  Flex,
  Input,
  Button,
  Box,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react';
import { useAppContext } from '../../../Contexts/AppContext';
import { formatCEP } from '../../../utils/format';

import * as S from './styled';

export default function Form2({ setMenu }) {
  // Menu Functions
  const handleClick = () => {
    setMenu('03');
  };
  const handleBack = () => {
    setMenu('01');
  };

  // Input
  const {
    logradouro,
    setLogradouro,
    streetNumber,
    setStreetNumber,
    cep,
    setCep,
    bairro,
    setBairro,
    cidadeEstado,
    setCidadeEstado,
    referencia,
    setReferencia,
    complemento,
    setComplemento
  } = useAppContext();

  const handleInputChange = ({ target }) => {
    if (target.id === 'logradouro') {
      setLogradouro(target.value);
    } else if (target.id === 'streetNumber') {
      setStreetNumber(target.value);
    } else if (target.id === 'cep') {
      target.value = formatCEP(target.value);
      setCep(target.value);
    } else if (target.id === 'bairro') {
      setBairro(target.value);
    } else if (target.id === 'cidadeEstado') {
      setCidadeEstado(target.value);
    } else if (target.id === 'referencia') {
      setReferencia(target.value);
    } else if (target.id === 'complemento') {
      setComplemento(target.value);
    }
  };

  return (
    <Box>
      <Box>
        <Flex mb="1rem">
          <FormControl mr="2rem">
            <FormLabel htmlFor="logradouro">
              Logradouro (rua, avenida e etc.)
            </FormLabel>
            <Input
              type="text"
              name="logradouro"
              id="logradouro"
              onChange={handleInputChange}
              value={logradouro}
            />
          </FormControl>

          <FormControl w="25%">
            <FormLabel htmlFor="streetNumber">Número</FormLabel>
            <NumberInput name="streetNumber" id="streetNumber">
              <NumberInputField
                onChange={handleInputChange}
                value={streetNumber}
                maxLength="6"
              />
            </NumberInput>
          </FormControl>
        </Flex>

        <Flex mb="1rem">
          <FormControl mr="2rem" w="50%">
            <FormLabel htmlFor="cep">CEP</FormLabel>
            <Input
              type="text"
              name="cep"
              id="cep"
              onChange={handleInputChange}
              value={cep}
              maxLength="9"
            />
          </FormControl>

          <FormControl mr="2rem">
            <FormLabel htmlFor="bairro">Bairro</FormLabel>
            <Input
              type="text"
              name="bairro"
              id="bairro"
              onChange={handleInputChange}
              value={bairro}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="cidadeEstado">Cidade e Estado</FormLabel>
            <Select
              type="text"
              name="cidadeEstado"
              id="cidadeEstado"
              onChange={handleInputChange}
              value={cidadeEstado}
            >
              <option value="Balneário Camboriú - SC">
                Balneário Camboriú - SC
              </option>
              <option value="São Paulo - SP">São Paulo - SP</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex mb="2rem">
          <FormControl mr="2rem">
            <FormLabel htmlFor="complemento">Complemento</FormLabel>
            <Input
              type="text"
              name="complemento"
              id="complemento"
              onChange={handleInputChange}
              value={complemento}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="referencia">Referência</FormLabel>
            <Input
              type="text"
              name="referencia"
              id="referencia"
              onChange={handleInputChange}
              value={referencia}
            />
          </FormControl>
        </Flex>
      </Box>

      <Flex mb="2rem" justify="space-between">
        <Box>
          <S.BackButton onClick={handleBack}>
            voltar
            <img src="/images/arrow-checkout.svg" alt="Voltar" />
          </S.BackButton>
        </Box>
        <Box mb="4rem">
          <Button size="lg" onClick={handleClick}>
            Próximo Passo
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
