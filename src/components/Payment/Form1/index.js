import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Button,
  Box,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react';

import { useAppContext } from '../../../Contexts/AppContext';

export default function Form1({ setMenu }) {
  const handleClick = () => {
    setMenu('02');
  };

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    areaCode,
    setAreaCode,
    phoneNumber,
    setPhoneNumber
  } = useAppContext();

  const handleInputChange = ({ target }) => {
    if (target.id === 'first_name') {
      setFirstName(target.value);
    } else if (target.id === 'last_name') {
      setLastName(target.value);
    } else if (target.id === 'email') {
      setEmail(target.value);
    } else if (target.id === 'area_code') {
      setAreaCode(target.value);
    } else if (target.id === 'number') {
      setPhoneNumber(target.value);
    }
  };

  return (
    <Box>
      <Flex mb="1rem">
        <FormControl mr="2rem">
          <FormLabel htmlFor="first_name">Nome</FormLabel>
          <Input
            id="first_name"
            name="first_name"
            type="text"
            value={firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last_name">Sobrenome</FormLabel>
          <Input
            id="last_name"
            name="last_name"
            type="text"
            value={lastName}
            onChange={handleInputChange}
          />
        </FormControl>
      </Flex>

      <Flex mb="2rem">
        <Box w="100%" mr="2rem">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
        <Box d="flex" w="100%">
          <FormControl w="30%" mr="2rem">
            <FormLabel htmlFor="area_code">DDD</FormLabel>
            <NumberInput
              maxLength="3"
              name="area_code"
              id="area_code"
              value={areaCode}
            >
              <NumberInputField onChange={handleInputChange} />
            </NumberInput>
          </FormControl>
          <FormControl w="100%">
            <FormLabel htmlFor="number">Telefone</FormLabel>
            <NumberInput
              name="number"
              id="number"
              maxLength="9"
              pattern="[0-9]{5}-[0-9]{4}"
              value={phoneNumber}
            >
              <NumberInputField onChange={handleInputChange} />
            </NumberInput>
          </FormControl>
        </Box>
      </Flex>
      <Flex mb="2rem" justify="flex-end">
        <Button size="lg" onClick={handleClick}>
          Próximo Passo
        </Button>
      </Flex>
    </Box>
  );
}
