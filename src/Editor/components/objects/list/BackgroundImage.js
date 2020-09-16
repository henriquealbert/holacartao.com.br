import { Image } from 'react-konva';
import useImage from 'use-image';

export default function BackgroundImage({ imageBG }) {
  const [imgBG] = useImage(imageBG?.url, 'Anonymous');

  return (
    <Image
      image={imgBG}
      x={imageBG.x}
      y={imageBG.y}
      width={imageBG.width}
      height={imageBG.height}
    />
  );
}
