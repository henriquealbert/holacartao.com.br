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
            width: textRef.current.width() * textRef.current.scaleX(),
            scaleX: 1
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
