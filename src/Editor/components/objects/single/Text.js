import { useRef, useEffect } from 'react';
import { Transformer, Text } from 'react-konva';

const TextComponent = ({ shapeProps, isSelected, onSelect, onChange }) => {
  // Refs
  const textRef = useRef();
  const textTRRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      textTRRef.current.nodes([textRef.current]);
      textTRRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={textRef}
        onTransform={() => {
          textRef.current.setAttrs({
            width: Math.max(
              textRef.current.width() * textRef.current.scaleX(),
              20
            ),
            scaleX: 1,
            scaleY: 1
          });
        }}
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
          const node = textRef.current;
          const scaleX = node.scaleX();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            width: Math.max(5, node.width() * scaleX)
          });
        }}
      />

      {isSelected && (
        <Transformer
          keepRatio={true}
          ref={textTRRef}
          anchorSize={Number(7)}
          rotationSnaps={[0, 90, 180, 270]}
          enabledAnchors={['middle-left', 'middle-right']}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            newBox.width = Math.max(30, newBox.width);

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

export default TextComponent;
