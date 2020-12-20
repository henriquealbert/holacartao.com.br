import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Text
} from '@chakra-ui/react';
import SingleModel from './singleModel';

export default function ModelosList({ data }) {
  const { cardModels } = data;
  const { cardCategories } = data;

  const [categoria, setCategoria] = useState('All');
  const categoriesList = cardModels?.filter(
    (model) => model.card_category.title === categoria
  );

  return (
    <Box mx="1rem" mt="52px">
      <Box>
        <Text
          as="h1"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="55px"
          letterSpacing="0.01em"
          lineHeight="66px"
        >
          Modelos de Cartão de Visita
        </Text>
        <Text fontSize="18px" letterSpacing="0.01em" color="gray.600" my="42px">
          Crie seu próprio cartão de visita à partir de um modelo em branco{' '}
          <Link
            href={{
              pathname: '/editor/',
              query: { url: '/editor/' }
            }}
          >
            <Text as="a" textDecoration="underline">
              clicando aqui
            </Text>
          </Link>{' '}
          ou escolha um modelo abaixo para personalizar.
        </Text>
      </Box>
      <FormControl>
        <FormLabel>Selecione uma Categoria</FormLabel>
        <Select
          onChange={setCategoria}
          border="3px solid"
          borderColor="brand.200"
          h="50px"
          size="lg"
        >
          <option value="All">Todos os Modelos</option>
          {cardCategories?.map((category) => {
            return (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <Flex mt="56px">
        {categoria === 'All'
          ? cardModels?.map((model) => (
              <SingleModel key={model.id} model={model} />
            ))
          : categoriesList?.map((model) => (
              <SingleModel key={model.id} model={model} />
            ))}
      </Flex>
    </Box>
  );
}
