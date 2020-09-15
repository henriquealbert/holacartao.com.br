import { useState } from 'react';
import Modal from 'react-modal';
import MUTATION_DELETE_CARD_MODEL from '../../../graphql/admin/MutationDeleteCardModel';
import clientAdmin from '../../../graphql/clientAdmin';
import Router from 'next/router';

import * as S from './styled';

Modal.setAppElement('#__next');

const customStyles = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0'
  }
};

export default function DeleteCardModel({ id }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    const input = {
      where: {
        id: id
      }
    };
    await clientAdmin.request(MUTATION_DELETE_CARD_MODEL, { input });
    setLoading(false);
    setIsOpen(false);
    Router.reload();
  };

  return (
    <>
      <S.DeleteIcon onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <S.ModalContentDelete>
          <h3>
            Você tem certeza de que deseja <strong>excluir</strong> este Modelo
            de Cartão?
          </h3>
          <S.ButtonsWrapper>
            <S.ButtonNope onClick={closeModal}>Cancelar</S.ButtonNope>
            <S.ButtonDel onClick={handleDelete}>
              {loading ? 'Deletando...' : 'Deletar!'}
            </S.ButtonDel>
          </S.ButtonsWrapper>
        </S.ModalContentDelete>
      </Modal>
    </>
  );
}
