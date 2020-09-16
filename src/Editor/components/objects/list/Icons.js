import IconComponent from '../single/Icon';

export default function Icons({
  store,
  selectedId,
  setSelectedId,
  updateElement
}) {
  const icons = store.filter((element) => element.type === 'icon');

  return (
    <>
      {icons.map((icon) => {
        return (
          <IconComponent
            key={icon.id}
            shapeProps={icon}
            isSelected={icon.id === selectedId}
            onSelect={() => {
              setSelectedId(icon.id);
            }}
            onChange={(newAttrs) => {
              updateElement(icon.id, newAttrs);
            }}
            icon={icon}
          />
        );
      })}
    </>
  );
}
