import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import SingleModel from './SingleModel';
import SelectCategory from './SelectCategory';
import Pagination from './Pagination';

export default function ModelosList({ data }) {
  const { cardModels } = data;
  const { cardCategories } = data;

  const [categoria, setCategoria] = useState('All');

  const categoriesList = cardModels?.filter(
    (model) => model.card_category.title === categoria
  );

  // All Card
  const [currentPage, setCurrentPage] = useState(10);
  const currentModelsAll = cardModels.slice(0, currentPage);
  const lastPageAll =
    cardModels.length === currentModelsAll.length ? true : false;
  const addMoreAll = () => setCurrentPage((prev) => prev + 10);

  // Filtered Category
  const currentModelsCategory = categoriesList.slice(0, currentPage);
  const lastPageCategory =
    categoriesList.length === currentModelsCategory.length ? true : false;
  const addMoreCategory = () => setCurrentPage((prev) => prev + 10);

  return (
    <Box maxW="1280px" m="0 auto">
      <Box mx="1rem" mt="52px">
        <Flex
          direction={{ base: 'column', md: 'row-reverse' }}
          justifyContent={{ base: '', md: 'center' }}
          mb={{ base: '42px', md: '80px' }}
        >
          <Text
            as="h1"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="55px"
            letterSpacing="0.01em"
            lineHeight="66px"
            maxW="410px"
          >
            Modelos de Cartão de Visita
          </Text>
          <Text
            fontSize="18px"
            letterSpacing="0.01em"
            color="gray.500"
            lineHeight="30px"
            textAlign={{ base: 'left', md: 'right' }}
            mt={{ base: '42px', md: '10px' }}
            mr={{ base: '0', md: '40px' }}
            maxW="360px"
          >
            Crie seu próprio cartão de visita à partir de um modelo em branco{' '}
            <Link
              href={{
                pathname: '/editor/',
                query: { url: '/editor/' }
              }}
            >
              <Button
                variant="link"
                as="a"
                textDecoration="underline"
                textTransform="normal"
                cursor="pointer"
                fontSize="18px"
                letterSpacing="0.01em"
                color="gray.900"
                lineHeight="30px"
                mb="2px"
              >
                clicando aqui
              </Button>
            </Link>{' '}
            ou escolha um modelo abaixo para personalizar.
          </Text>
        </Flex>
        <SelectCategory
          cardCategories={cardCategories}
          setCategoria={setCategoria}
          setCurrentPage={setCurrentPage}
        />

        <Flex
          mt="56px"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: '', md: 'space-around' }}
        >
          {categoria === 'All'
            ? currentModelsAll?.map((model) => (
                <SingleModel key={model.id} model={model} />
              ))
            : categoriesList?.map((model) => (
                <SingleModel key={model.id} model={model} />
              ))}
        </Flex>

        <Pagination
          addMoreAll={addMoreAll}
          lastPageAll={lastPageAll}
          addMoreCategory={addMoreCategory}
          lastPageCategory={lastPageCategory}
        />
      </Box>
    </Box>
  );
}
