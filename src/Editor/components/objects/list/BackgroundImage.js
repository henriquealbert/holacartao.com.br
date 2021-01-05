import { Image } from 'react-konva';
import useImage from 'use-image';

export default function BackgroundImage({ imageBG }) {
  const [imgBG] = useImage(imageBG?.url, 'Anonymous');

  return (
    <Image
      image={imgBG}
      x={imageBG?.x}
      y={imageBG?.y}
      width={imageBG?.width}
      height={imageBG?.height}
      rotation={imageBG?.rotation}
      offset={{
        x: 320,
        y: 180.5
      }}
    />
  );
}
