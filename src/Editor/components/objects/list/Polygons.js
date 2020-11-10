import PolygonComponent from '../single/Polygon';

export default function Polygons({ editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    updateElement,
    setColor
  } = editorStore;

  const polygons = store.filter((element) => element.type === 'polygon');

  return (
    <>
      {polygons.map((polygon) => {
        return (
          <PolygonComponent
            key={polygon.id}
            shapeProps={polygon}
            isSelected={polygon.id === selectedId}
            onSelect={() => {
              setSelectedId(polygon.id);
              setColor(polygon.fill);
            }}
            onChange={(newAttrs) => {
              updateElement(polygon.id, newAttrs);
            }}
            color={polygon.fill}
          />
        );
      })}
    </>
  );
}
