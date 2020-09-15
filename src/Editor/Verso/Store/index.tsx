import { useState, createContext, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

const EditorVersoContext = createContext(null);

export const EditorProviderVerso = ({ children }) => {
  // Create BG
  const BG = {
    id: String(nanoid() + Date.now()),
    type: 'bg',
    fill: '#ffffff',
    width: 640,
    height: 360.0123494905835,
    x: 0,
    y: 0
  };
  // Create array of Elements
  const [store, setStore] = useState([BG]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((prev) => prev.concat([store]));
  }, [store]);

  const handleUndo = () => {
    if (history.length === 1) {
      return;
    }
    const step = history.length - 2;
    const previous = history[step];
    setStore(previous);
    setHistory((prev) => prev.slice(0, step));
  };

  // actions
  const addRect = () => {
    const newRect = {
      id: String(nanoid() + Date.now()),
      type: 'rect',
      fill: '#898D83',
      width: 50,
      height: 50,
      x: 0,
      y: 0
    };
    setStore([...store, newRect]);
  };

  const addCircle = () => {
    const newCircle = {
      id: String(nanoid() + Date.now()),
      type: 'circle',
      fill: '#898D83',
      radius: 25,
      width: 50,
      height: 50,
      x: 25,
      y: 25
    };
    setStore([...store, newCircle]);
  };

  const addTriangle = () => {
    const newTriangle = {
      id: String(nanoid() + Date.now()),
      type: 'polygon',
      fill: '#898D83',
      sides: 3,
      width: 70,
      height: 70,
      x: 50,
      y: 50
    };
    setStore([...store, newTriangle]);
  };

  const addHexagon = () => {
    const newHexagon = {
      id: String(nanoid() + Date.now()),
      type: 'polygon',
      fill: '#898D83',
      sides: 6,
      width: 70,
      height: 70,
      x: 50,
      y: 50
    };
    setStore([...store, newHexagon]);
  };

  const addStar = () => {
    const newStar = {
      id: String(nanoid() + Date.now()),
      type: 'star',
      fill: '#898D83',
      numPoints: 5,
      innerRadius: 13.5,
      outerRadius: 20,
      width: 70,
      height: 70,
      x: 50,
      y: 50
    };
    setStore([...store, newStar]);
  };

  const addText = () => {
    const newText = {
      id: String(nanoid() + Date.now()),
      type: 'text',
      fill: '#898D83',
      text: 'Adicionar Novo Texto',
      fontSize: 24,
      fontStyle: '',
      textDecoration: '',
      fontFamily: 'Arial',
      x: 50,
      y: 50
    };
    setStore([...store, newText]);
  };

  const updateElement = (id, newAttrs) => {
    const found = store.filter((element) => element.id === id);
    found[0] = newAttrs;
    // remover elemento do store
    const elements = store.filter((element) => element.id !== id);
    // adicionar elemento atualizado no store
    elements.push(found[0]);
    setStore(elements);
  };

  const removeElement = () => {
    const elements = store.filter((element) => element.id !== selectedId);
    setStore(elements);
  };

  // UTILS

  // Color BG
  const [colorBG, setColorBG] = useState('#FFFFFF');

  // Image BG
  const [imageBG, setImageBG] = useState('');

  // Icons
  const [iconColor, setIconColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  // images
  const [imageLibrary, setImageLibrary] = useState([]);

  // Text
  const [text, setText] = useState('');

  // Save
  const [handleSave, setHandleSave] = useState(null);

  // Selections
  const [selectedId, setSelectedId] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty =
      e.target === e.target.getStage().findOne('#bg-verso');
    if (clickedOnEmpty) {
      setSelectedId(null);
      setText('');
    }
    const sangriaLines =
      e.target === e.target.getStage().findOne('#linha-sangria');
    if (sangriaLines) {
      setSelectedId(null);
      setText('');
    }
  };

  return (
    <EditorVersoContext.Provider
      value={{
        store,
        setStore,
        addRect,
        addCircle,
        addStar,
        addTriangle,
        addHexagon,
        addText,
        updateElement,
        removeElement,
        handleSave,
        setHandleSave,
        selectedId,
        setSelectedId,
        checkDeselect,
        handleUndo,
        text,
        setText,
        colorBG,
        setColorBG,
        imageBG,
        setImageBG,
        imageLibrary,
        setImageLibrary,
        iconColor,
        setIconColor
      }}
    >
      {children}
    </EditorVersoContext.Provider>
  );
};

export const useEditorStoreVerso = () => useContext(EditorVersoContext);
