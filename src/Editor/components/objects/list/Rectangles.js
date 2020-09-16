import RectangleComponent from '../single/Rectangle';

export default function Rectangles({
  store,
  selectedId,
  setSelectedId,
  updateElement
}) {
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
