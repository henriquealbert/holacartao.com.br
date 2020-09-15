import Modal from 'react-modal';
import { useEditorUtilsContext } from '../Context/EditorUtilsContext';

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

export default function BeforeSaveModal() {
  const { modalIsOpen, closeModal, frontCardImg } = useEditorUtilsContext();

  const backCardImg = () => {
    if (modalIsOpen) {
      const img = document
        .getElementsByTagName('canvas')[0]
        .toDataURL('image/png', 1.0);
      return img;
    }
  };
  return (
    <S.BeforeSaveModalWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <S.ModalContent id="vamosla">
          <p>
            Verifique antes de imprimir, se todos os elementos estão dentro da
            linha vermelha de segurança.
          </p>
          <S.CardReviewImg>
            <div>
              <span>Frente</span>
              <img src={frontCardImg} alt="Cartão Frente" />
            </div>
            <div>
              <span>Verso</span>
              <img src={backCardImg()} alt="Cartão Verso" />
            </div>
          </S.CardReviewImg>
          <S.ButtonsModal>
            <button onClick={closeModal}>
              {'<-'} Tá ruim, volta pra edição
            </button>
            <button>Tudo certo, imprimir!</button>
          </S.ButtonsModal>
        </S.ModalContent>
      </Modal>
    </S.BeforeSaveModalWrapper>
  );
}
