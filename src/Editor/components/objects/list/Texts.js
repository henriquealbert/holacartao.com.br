import TextComponent from '../single/Text';

export default function Texts({
  store,
  selectedId,
  setSelectedId,
  updateElement,
  setText
}) {
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
