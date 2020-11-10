import CircleComponent from '../single/Circle';

export default function Circles({ editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    updateElement,
    setColor
  } = editorStore;
  const circles = store.filter((element) => element.type === 'circle');

  return (
    <>
      {circles.map((circle) => {
        return (
          <CircleComponent
            key={circle.id}
            shapeProps={circle}
            isSelected={circle.id === selectedId}
            onSelect={() => {
              setSelectedId(circle.id);
              setColor(circle.fill);
            }}
            onChange={(newAttrs) => {
              updateElement(circle.id, newAttrs);
            }}
            color={circle.fill}
          />
        );
      })}
    </>
  );
}
