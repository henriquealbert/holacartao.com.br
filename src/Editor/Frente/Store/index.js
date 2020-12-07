import { useState, createContext, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

const EditorFrenteContext = createContext(null);

export const EditorProviderFrente = ({ children }) => {
  const whiteBackground = {
    id: String(nanoid() + Date.now()),
    type: 'bg',
    fill: '#FFFFFF',
    width: 640,
    height: 360.1860465116279,
    x: 0,
    y: 0
  };
  // Create array of Elements
  const [store, setStore] = useState([whiteBackground]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((prev) => prev.concat([store]));
  }, [store]);

  useEffect(() => {
    const imgsbg = store.filter((element) => element.type === 'image-bg');
    if (imgsbg.length > 0) {
      setImageBG(imgsbg[0]);
    }
  }, [store]);

  const handleUndo = () => {
    if (history.length > 2) {
      const step = history.length - 3;
      const previous = history[step];
      setStore(previous);
      history.pop();
    }
    if (history.length > 1) {
      const step = history.length - 2;
      const previous = history[step];
      setStore(previous);
      history.pop();
    }
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
      y: 0,
      name: 'object'
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
      y: 25,
      name: 'object'
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
      y: 50,
      name: 'object'
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
      y: 50,
      name: 'object'
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
      y: 50,
      name: 'object'
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
      fontFamily: 'Roboto',
      align: '',
      letterSpacing: 0,
      width: 250,
      x: 50,
      y: 50,
      name: 'object'
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
  const [colorBG, setColorBG] = useState('');
  const [color, setColor] = useState('');
  const [presetColors, setPresetColors] = useState([]);

  // Image BG
  const [imageBG, setImageBG] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
    rotation: 0,
    url: ''
  });

  // Icons
  const [iconColor, setIconColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  // images
  const [imageLibrary, setImageLibrary] = useState([]);

  // Text
  const [text, setText] = useState('');
  const [textFontFamily, setTextFontFamily] = useState('Roboto');
  const [textFontSize, setTextFontSize] = useState(24);
  const [textFontStyle, setTextFontStyle] = useState('');
  const [textFontDecoration, setTextFontDecoration] = useState('');
  const [textAlign, setTextAlign] = useState('');
  const [textLetterSpacing, setTextLetterSpacing] = useState(0);

  // Save
  const [saveFinalCard, setSaveFinalCard] = useState(null);

  // Canva com Sangria
  const [saveWithSangria, setSaveWithSangria] = useState();

  // Selections
  const [selectedId, setSelectedId] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty =
      e.target === e.target.getStage().findOne('#bg-frente');
    if (clickedOnEmpty) {
      setSelectedId(null);
      setText('');
      setTextFontFamily('Roboto');
      setTextFontStyle('');
      setTextFontDecoration('');
      setTextAlign('');
    }
    const sangriaLines =
      e.target === e.target.getStage().findOne('#linha-sangria');
    if (sangriaLines) {
      setSelectedId(null);
      setText('');
      setTextFontFamily('Roboto');
      setTextFontStyle('');
      setTextFontDecoration('');
      setTextAlign('');
    }
  };

  const resetState = () => {
    setStore([whiteBackground]);
    setHistory([]);
    setSelectedId(null);
    setText('');
    setImageLibrary([]);
    setImageBG({
      height: 0,
      width: 0,
      x: 0,
      y: 0,
      rotation: 0,
      url: ''
    });
    setColorBG('');
    setColor('');
    setPresetColors([]);
    setTextFontFamily('Roboto');
    setTextFontSize(24);
    setTextFontStyle('');
    setTextFontDecoration('');
    setTextAlign('');
    setTextLetterSpacing(0);
  };

  return (
    <EditorFrenteContext.Provider
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
        setIconColor,
        saveFinalCard,
        setSaveFinalCard,
        saveWithSangria,
        setSaveWithSangria,
        resetState,
        textFontFamily,
        setTextFontFamily,
        textFontSize,
        setTextFontSize,
        textFontStyle,
        setTextFontStyle,
        textFontDecoration,
        setTextFontDecoration,
        textAlign,
        setTextAlign,
        color,
        setColor,
        presetColors,
        setPresetColors,
        textLetterSpacing,
        setTextLetterSpacing
      }}
    >
      {children}
    </EditorFrenteContext.Provider>
  );
};

export const useEditorStoreFrente = () => useContext(EditorFrenteContext);
