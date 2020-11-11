import { useRef, useEffect } from 'react';
import { Rect, Transformer } from 'react-konva';

const RectangleComponent = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  color
}) => {
  const rectRef = useRef();
  const rectTRRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      rectTRRef.current.nodes([rectRef.current]);
      rectTRRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        fill={color}
        onClick={onSelect}
        onTap={onSelect}
        ref={rectRef}
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
          const node = rectRef.current;
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
          ref={rectTRRef}
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

export default RectangleComponent;
