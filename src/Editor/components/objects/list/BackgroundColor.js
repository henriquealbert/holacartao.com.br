import { Rect } from 'react-konva';

export default function BackgroundColor({ store, BgId }) {
  const bg = store.filter((element) => element.type === 'bg');

  return (
    <>
      {bg.map((bg) => {
        return (
          <Rect
            key={bg?.id}
            fill={bg?.fill}
            width={bg?.width}
            height={bg?.height}
            id={BgId}
          />
        );
      })}
    </>
  );
}
