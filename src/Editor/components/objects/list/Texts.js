import TextComponent from '../single/Text';

export default function Texts({ editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    updateElement,
    setText,
    setTextFontFamily,
    setTextFontSize,
    setTextFontDecoration,
    setTextFontStyle,
    setTextAlign,
    setColor,
    setTextLetterSpacing
  } = editorStore;

  const txts = store.filter((element) => element.type === 'text');

  return (
    <>
      {txts.map((text) => {
        return (
          <TextComponent
            key={text.id}
            shapeProps={text}
            isSelected={text.id === selectedId}
            onSelect={() => {
              setSelectedId(text.id);
              setText(text.text);
              setTextFontFamily(text.fontFamily);
              setTextFontSize(text.fontSize);
              setTextFontStyle(text.fontStyle);
              setTextFontDecoration(text.textDecoration);
              setTextAlign(text.align);
              setColor(text.fill);
              setTextLetterSpacing(text.letterSpacing);
            }}
            onChange={(newAttrs) => {
              updateElement(text.id, newAttrs);
            }}
          />
        );
      })}
    </>
  );
}
