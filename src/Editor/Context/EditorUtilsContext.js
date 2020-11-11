import { createContext, useContext, useState } from 'react';

const EditorUtilsContext = createContext(null);

export const EditorUtilsProvider = ({ children }) => {
  // Card Sides
  const [frente, setFrente] = useState(true);

  const [cardFrenteSangria, setCardFrenteSangria] = useState(null);
  const [cardVersoSangria, setCardVersoSangria] = useState(null);
  const [cardFrenteFinal, setCardFrenteFinal] = useState(null);
  const [cardVersoFinal, setCardVersoFinal] = useState(null);

  const changeSide = (sangria, final) => {
    setCardFrenteSangria(sangria);
    setCardFrenteFinal(final);
    setFrente(!frente);
  };

  // Modal Before Save
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (sangria, final) => {
    setCardVersoSangria(sangria);
    setCardVersoFinal(final);

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [saveCardHeader, setSaveCardHeader] = useState(null);

  const resetUtilsState = () => {
    setFrente(true);
    setIsOpen(false);
    setCardFrenteSangria(null);
    setCardVersoSangria(null);
    setCardFrenteFinal(null);
    setCardVersoFinal(null);
    setSaveCardHeader(null);
  };

  return (
    <EditorUtilsContext.Provider
      value={{
        changeSide,
        frente,
        setFrente,
        modalIsOpen,
        openModal,
        setIsOpen,
        closeModal,
        saveCardHeader,
        setSaveCardHeader,
        resetUtilsState,
        cardFrenteSangria,
        cardVersoSangria,
        cardFrenteFinal,
        cardVersoFinal
      }}
    >
      {children}
    </EditorUtilsContext.Provider>
  );
};

export const useEditorUtilsContext = () => useContext(EditorUtilsContext);
