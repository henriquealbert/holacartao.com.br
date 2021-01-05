import StarComponent from '../single/Star';

export default function Stars({ editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    updateElement,
    setColor
  } = editorStore;

  const stars = store.filter((element) => element.type === 'star');

  return (
    <>
      {stars.map((star) => {
        return (
          <StarComponent
            key={star?.id}
            shapeProps={star}
            isSelected={star?.id === selectedId}
            onSelect={() => {
              setSelectedId(star?.id);
              setColor(star?.fill);
            }}
            onChange={(newAttrs) => {
              updateElement(star?.id, newAttrs);
            }}
            color={star?.fill}
          />
        );
      })}
    </>
  );
}
