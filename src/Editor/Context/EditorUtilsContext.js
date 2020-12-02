import { createContext, useContext, useState } from 'react';

const EditorUtilsContext = createContext(null);

export const EditorUtilsProvider = ({ children }) => {
  // Card Sides
  const [frente, setFrente] = useState(true);

  const changeSide = (sangria, final) => {
    localStorage.setItem('frenteSangria', sangria);
    localStorage.setItem('frenteFinal', final);
    setFrente(!frente);
  };

  // Modal Before Save
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (sangria, final) => {
    localStorage.setItem('versoSangria', sangria);
    localStorage.setItem('versoFinal', final);

    setIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [saveCardHeader, setSaveCardHeader] = useState(null);

  const resetUtilsState = () => {
    setFrente(true);
    setIsOpen(false);
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
        resetUtilsState
      }}
    >
      {children}
    </EditorUtilsContext.Provider>
  );
};

export const useEditorUtilsContext = () => useContext(EditorUtilsContext);
