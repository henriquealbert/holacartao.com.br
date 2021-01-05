import ImageComponent from '../single/Image';

export default function Images({ editorStore }) {
  const { store, selectedId, setSelectedId, updateElement } = editorStore;

  const imgs = store.filter((element) => element.type === 'image');

  return (
    <>
      {imgs.map((img) => {
        return (
          <ImageComponent
            key={img?.id}
            shapeProps={img}
            isSelected={img?.id === selectedId}
            onSelect={() => {
              setSelectedId(img?.id);
            }}
            onChange={(newAttrs) => {
              updateElement(img?.id, newAttrs);
            }}
            image={img}
          />
        );
      })}
    </>
  );
}
