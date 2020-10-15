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

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [saveCardHeader, setSaveCardHeader] = useState(null);

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
        setSaveCardHeader
      }}
    >
      {children}
    </EditorUtilsContext.Provider>
  );
};

export const useEditorUtilsContext = () => useContext(EditorUtilsContext);
