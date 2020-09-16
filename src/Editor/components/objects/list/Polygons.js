import PolygonComponent from '../single/Polygon';

export default function Polygons({
  store,
  selectedId,
  setSelectedId,
  updateElement
}) {
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
