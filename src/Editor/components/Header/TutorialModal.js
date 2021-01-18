import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 48%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 51.5%;
  }
`;

export default function TutorialModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        textTransform="capitalize"
        ml="2rem"
        color="brand.200"
      >
        Assistir Tutorial
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="normal" fontSize="1rem">
            Primeiros Passos
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              as="h2"
              fontSize="20px"
              fontWeight="semibold"
              textAlign="center"
              maxW="500px"
              m="0.5rem auto"
            >
              Veja como é fácil utilizar a ferramenta do Hola Cartão para criar
              ou editar o seu Cartão de Visita:
            </Text>
            <Flex maxW="720px" w="100%">
              <VideoWrapper>
                <iframe
                  src="https://fast.wistia.net/embed/iframe/r36917efm3?seo=false&videoFoam=true"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="secondary"
              border="1px solid"
              borderColor="black"
              textTransform="capitalize"
              onClick={onClose}
              mt="1rem"
            >
              Fechar Tutorial
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
