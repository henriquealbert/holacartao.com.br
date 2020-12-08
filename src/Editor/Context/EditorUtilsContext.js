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

  const [saveCardHeader, setSaveCardHeader] = useState(null);

  const resetUtilsState = () => {
    setFrente(true);
    setSaveCardHeader(null);
  };

  return (
    <EditorUtilsContext.Provider
      value={{
        changeSide,
        frente,
        setFrente,
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
