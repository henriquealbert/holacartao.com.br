import { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const ImageComponent = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  image
}) => {
  const imageRef = useRef();
  const imageTRRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      imageTRRef.current.nodes([imageRef.current]);
      imageTRRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const [imagem] = useImage(image?.url, 'Anonymous');

  return (
    <>
      <Image
        image={imagem}
        onClick={onSelect}
        onTap={onSelect}
        ref={imageRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={imageTRRef}
          keepRatio={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right'
          ]}
          anchorSize={Number(7)}
          rotationSnaps={[0, 90, 180, 270]}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default ImageComponent;
