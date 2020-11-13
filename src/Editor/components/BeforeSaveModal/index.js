import Modal from 'react-modal';
import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

import CardReviewImg from '../CardReviewImg';
import FormCardModel from '../FormCardModel';
import SubmitPrint from '../SubmitPrint';

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

export default function BeforeSaveModal({ infoCard, user }) {
  const { modalIsOpen, closeModal } = useEditorUtilsContext();

  return (
    <S.BeforeSaveModalWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <S.ModalContent>
          <p>
            Verifique antes de finalizar, se todos os elementos estão dentro da
            linha vermelha de segurança.
          </p>
          <CardReviewImg user={user} />
          {user ? (
            <S.ButtonsModal>
              <button onClick={closeModal}>
                {'<-'} Tá ruim, volta pra edição
              </button>
              <SubmitPrint />
            </S.ButtonsModal>
          ) : (
            <FormCardModel infoCard={infoCard} />
          )}
        </S.ModalContent>
      </Modal>
    </S.BeforeSaveModalWrapper>
  );
}
