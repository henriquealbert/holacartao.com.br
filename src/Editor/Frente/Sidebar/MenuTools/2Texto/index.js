import { useEditorStoreFrente } from '../../../Store';

import * as S from './styled';

export default function Item2({ openItem2 }) {
  //context

  const {
    addText,
    selectedId,
    setStore,
    store,
    text,
    setText
  } = useEditorStoreFrente();

  // Set Bold
  const handleBold = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const fontStyle = found[0].fontStyle;
      // check if has bold
      if (fontStyle.includes('bold')) {
        found[0].fontStyle = found[0].fontStyle.replace(/bold/i, '');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
      // check if doesnt have bold
      if (fontStyle.includes('bold') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'bold ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
    }
  };

  // Set Italic
  const handleItalic = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const fontStyle = found[0].fontStyle;
      // check if has italic
      if (fontStyle.includes('italic')) {
        found[0].fontStyle = found[0].fontStyle.replace(/italic/i, '');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
      // check if doesnt have italic
      if (fontStyle.includes('italic') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'italic ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
    }
  };

  // Set Underline
  const handleUnderline = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const textDecoration = found[0].textDecoration;
      // check if has underline
      if (textDecoration.includes('underline')) {
        found[0].textDecoration = found[0].textDecoration.replace(
          /underline/i,
          ''
        );
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
      // check if doesnt have underline
      if (textDecoration.includes('underline') === false) {
        found[0].textDecoration = found[0].textDecoration.replace(
          '',
          'underline '
        );
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
      }
    }
  };

  // Change Text Value
  const changeText = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].text = text;
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setText('');
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  // Change Font Family
  const handleFontFamily = (e) => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].fontFamily = e.target.value;
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
    }
  };

  // Change Font Size
  const handleSize = (e) => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].fontSize = Number(e.target.value);
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
    }
  };

  return (
    <S.SidebarMenuWrapper2 className={openItem2 !== true ? '' : 'open'}>
      <S.ContentWrapper>
        <h3>Texto</h3>
        <S.AddTxt onClick={addText}>Adicionar Novo Texto</S.AddTxt>
        <S.ChangeTextWrapper>
          <input
            type="text"
            placeholder="Editar Texto"
            value={text}
            onChange={handleText}
          />
          <button onClick={changeText}>Alterar Texto</button>
        </S.ChangeTextWrapper>
        <h3>Estilos</h3>
        <S.TextStyle>
          <button onClick={handleItalic}>I</button>
          <button onClick={handleBold}>
            <strong>B</strong>
          </button>
          <button onClick={handleUnderline}>U</button>
        </S.TextStyle>
        <h3>Fonte</h3>
        <S.SelectFont name="fonte" id="fonte" onChange={handleFontFamily}>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Roboto">Roboto</option>
          <option value="Times New Roman">Times New Roman</option>
        </S.SelectFont>
        <h3>Tamanho</h3>
        <S.SizeFont
          type="number"
          name="tamanho"
          id="tamanho"
          defaultValue="24"
          onChange={handleSize}
        />
      </S.ContentWrapper>
    </S.SidebarMenuWrapper2>
  );
}
