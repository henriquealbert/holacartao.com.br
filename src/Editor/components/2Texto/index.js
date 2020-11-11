import { fontFamilyNames } from './fonts';

import * as S from './styled';

export default function Item2({ openItem2, editorStore }) {
  const {
    addText,
    selectedId,
    setStore,
    store,
    text,
    setText,
    textFontFamily,
    setTextFontFamily,
    textFontSize,
    setTextFontSize,
    textFontStyle,
    setTextFontStyle,
    textFontDecoration,
    setTextFontDecoration,
    textAlign,
    setTextAlign
  } = editorStore;

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
        setTextFontStyle(found[0].fontStyle);
      }
      // check if doesnt have bold
      if (fontStyle.includes('bold') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'bold ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
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
        setTextFontStyle(found[0].fontStyle);
      }
      // check if doesnt have italic
      if (fontStyle.includes('italic') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'italic ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
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
        setTextFontDecoration(found[0].textDecoration);
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
        setTextFontDecoration(found[0].textDecoration);
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
      setTextFontFamily(found[0].fontFamily);
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
      setTextFontSize(found[0].fontSize);
    }
  };

  // Change Text Align
  const handleCenter = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'center';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };

  const handleLeft = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'left';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };

  const handleRight = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'right';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };
  console.log();
  return (
    <S.SidebarMenuWrapper2 className={openItem2 !== true ? '' : 'open'}>
      <S.ContentWrapper>
        <h3>Texto</h3>
        <S.AddTxt onClick={addText}>Adicionar Novo Texto</S.AddTxt>
        <S.ChangeTextWrapper>
          <textarea
            name="textarea"
            id="textarea"
            cols="22"
            rows="3"
            value={text}
            onChange={handleText}
          />
          <button onClick={changeText}>Alterar Texto</button>
        </S.ChangeTextWrapper>
        <h3>Estilos</h3>
        <S.TextStyle>
          <button
            onClick={handleItalic}
            className={textFontStyle?.includes('italic') ? 'active' : ''}
          >
            I
          </button>
          <button
            onClick={handleBold}
            className={textFontStyle?.includes('bold') ? 'active' : ''}
          >
            <strong>B</strong>
          </button>
          <button
            onClick={handleUnderline}
            className={
              textFontDecoration?.includes('underline') ? 'active' : ''
            }
          >
            U
          </button>
        </S.TextStyle>
        <h3>Fonte</h3>
        <S.SelectFont
          name="fonte"
          id="fonte"
          onChange={handleFontFamily}
          value={
            fontFamilyNames.filter((font) => font.name === textFontFamily)[0]
              .name
          }
        >
          {fontFamilyNames.map((font) => {
            return (
              <option
                key={font.name}
                value={font.name}
                style={{ fontFamily: `${font.name}` }}
              >
                {font.name}
              </option>
            );
          })}
        </S.SelectFont>

        <h3>Tamanho</h3>
        <S.SizeFont
          type="number"
          name="tamanho"
          id="tamanho"
          value={textFontSize}
          onChange={handleSize}
        />
        <h3>Alinhamento</h3>
        <S.Align>
          <button
            onClick={handleLeft}
            className={textAlign?.includes('left') ? 'active' : ''}
          >
            left
          </button>
          <button
            onClick={handleCenter}
            className={textAlign?.includes('center') ? 'active' : ''}
          >
            center
          </button>
          <button
            onClick={handleRight}
            className={textAlign?.includes('right') ? 'active' : ''}
          >
            right
          </button>
        </S.Align>
      </S.ContentWrapper>
    </S.SidebarMenuWrapper2>
  );
}
