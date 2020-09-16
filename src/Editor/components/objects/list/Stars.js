import StarComponent from '../single/Star';

export default function Stars({
  store,
  selectedId,
  setSelectedId,
  updateElement
}) {
  const stars = store.filter((element) => element.type === 'star');

  return (
    <>
      {stars.map((star) => {
        return (
          <StarComponent
            key={star.id}
            shapeProps={star}
            isSelected={star.id === selectedId}
            onSelect={() => {
              setSelectedId(star.id);
            }}
            onChange={(newAttrs) => {
              updateElement(star.id, newAttrs);
            }}
            color={star.fill}
          />
        );
      })}
    </>
  );
}
