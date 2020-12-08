import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  ModalFooter,
  Text,
  Icon
} from '@chakra-ui/react';

import CardReviewImg from '../CardReviewImg';
import FormCardModel from '../FormCardModel';
import SubmitPrint from '../SubmitPrint';

export default function BeforeSaveModal({ infoCard, user, editorStore }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { saveFinalCard, saveWithSangria } = editorStore;
  const handleClick = () => {
    localStorage.setItem('versoSangria', saveWithSangria());
    localStorage.setItem('versoFinal', saveFinalCard());
    onOpen();
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick} size="lg">
        {user ? 'Pronto! Imprimir Cartão' : 'Finalizar Modelo'}
      </Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
        size="full"
      >
        <ModalOverlay />
        <ModalContent maxW="80%" h="auto" pb="40px">
          <ModalHeader>Revise seu cartão antes de imprimir</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardReviewImg user={user} />
            {user ? (
              <>
                <Text
                  textAlign="center"
                  fontSize="14px"
                  fontWeight="bold"
                  mt="2rem"
                >
                  Verifique antes de finalizar se todos os elementos estão
                  dentro da linha vermelha de segurança.
                </Text>
                <Text textAlign="center" fontSize="14px">
                  A linha vermelha NÃO aparecerá no seu cartão de visita.
                </Text>
              </>
            ) : null}
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            {user ? (
              <>
                <Button
                  variant="link"
                  onClick={onClose}
                  color="gray.900"
                  fontWeight="bold"
                >
                  <Icon as={ChevronLeftIcon} w={6} h={6} /> Voltar
                </Button>
                <SubmitPrint />
              </>
            ) : (
              <FormCardModel infoCard={infoCard} onClose={onClose} />
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
