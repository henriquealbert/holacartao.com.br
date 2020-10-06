import { createContext, useContext, useState } from 'react';

const EditorUtilsContext = createContext(null);

export const EditorUtilsProvider = ({ children }) => {
  // Card Sides
  const [frente, setFrente] = useState(true);

  const changeSide = () => {
    setFrente(!frente);
  };

  // Modal Before Save
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Save
  const [frontCardImg, setFrontCardImg] = useState(null);
  const [backCardImg, setBackCardImg] = useState(null);

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
        frontCardImg,
        setFrontCardImg,
        backCardImg,
        setBackCardImg,
        saveCardHeader,
        setSaveCardHeader
      }}
    >
      {children}
    </EditorUtilsContext.Provider>
  );
};

export const useEditorUtilsContext = () => useContext(EditorUtilsContext);
