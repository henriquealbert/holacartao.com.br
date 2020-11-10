import RectangleComponent from '../single/Rectangle';

export default function Rectangles({ editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    updateElement,
    setColor
  } = editorStore;

  const rects = store.filter((element) => element.type === 'rect');

  return (
    <>
      {rects.map((rect) => {
        return (
          <RectangleComponent
            key={rect.id}
            shapeProps={rect}
            isSelected={rect.id === selectedId}
            onSelect={() => {
              setSelectedId(rect.id);
              setColor(rect.fill);
            }}
            onChange={(newAttrs) => {
              updateElement(rect.id, newAttrs);
            }}
            color={rect.fill}
          />
        );
      })}
    </>
  );
}
