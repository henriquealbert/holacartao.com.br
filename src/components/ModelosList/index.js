import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Router from 'next/router';

import OneModel from './OneModel';
import SelectCategory from './SelectCategory';
import Pagination from './Pagination';
import useWindowDimensions from '@/utils/getWindowDimensions';

export default function ModelosList({ data }) {
  // modal mobile
  const { isMobile } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClick = () => {
    if (isMobile) {
      onOpen();
      return;
    }
    Router.push({
      pathname: '/editor/',
      query: { url: '/editor/' }
    });
  };

  // data
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
              onClick={onClick}
            >
              clicando aqui
            </Button>
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
          flexWrap="wrap"
        >
          {categoria === 'All'
            ? currentModelsAll?.map((model) => (
                <OneModel
                  key={model.id}
                  model={model}
                  cancelClick={isMobile}
                  onOpen={onOpen}
                />
              ))
            : categoriesList?.map((model) => (
                <OneModel
                  key={model.id}
                  model={model}
                  cancelClick={isMobile}
                  onOpen={onOpen}
                />
              ))}
        </Flex>

        <Pagination
          addMoreAll={addMoreAll}
          lastPageAll={lastPageAll}
          addMoreCategory={addMoreCategory}
          lastPageCategory={lastPageCategory}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="46px">
            <Icon viewBox="0 0 63 63" w={16} h={16} color="brand.200" mb="2rem">
              <path
                d="M27.962 5.193C13.647 5.193 2 16.839 2 31.155c0 14.316 11.647 25.963 25.962 25.963 14.316 0 25.963-11.647 25.963-25.963S42.278 5.193 27.963 5.193zm0 46.732c-11.452 0-20.77-9.318-20.77-20.77s9.318-20.77 20.77-20.77c11.453 0 20.77 9.318 20.77 20.77s-9.317 20.77-20.77 20.77z"
                fill="currentColor"
              />
              <path
                d="M35.305 38.497a10.54 10.54 0 01-1.535 1.27 10.363 10.363 0 01-3.71 1.56 10.665 10.665 0 01-4.195 0c-.66-.135-1.314-.34-1.945-.602a10.807 10.807 0 01-1.763-.956 10.68 10.68 0 01-2.809-2.809l-4.304 2.9c.558.828 1.199 1.607 1.902 2.308a15.557 15.557 0 004.956 3.341c.951.398 1.932.704 2.927.907a15.688 15.688 0 006.27 0c.991-.2 1.973-.506 2.928-.909a15.603 15.603 0 006.854-5.647l-4.304-2.9a10.393 10.393 0 01-1.272 1.537zM18.876 31.155a3.894 3.894 0 100-7.789 3.894 3.894 0 000 7.79zM37.05 25.962c-5.193 0-6.491 5.193-6.491 5.193h12.98s-1.3-5.193-6.49-5.193z"
                fill="currentColor"
              />
            </Icon>
            <Text fontSize="18px">
              Para prosseguir use um aparelho tablet ou computador.
            </Text>
            <Text fontSize="14px" color="gray.400">
              (Ou uma tela maior ou igual a 768px)
            </Text>
          </ModalBody>

          <ModalFooter justifyContent="center" mb="2rem">
            <Button variant="primary" onClick={onClose} type="button" size="lg">
              Ok, Entendi!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
