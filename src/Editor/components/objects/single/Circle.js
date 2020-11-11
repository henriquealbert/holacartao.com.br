import { useRef, useEffect } from 'react';
import { Circle, Transformer } from 'react-konva';

const CircleComponent = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  color
}) => {
  const circleRef = useRef();
  const circleTRRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      circleTRRef.current.nodes([circleRef.current]);
      circleTRRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Circle
        fill={color}
        onClick={onSelect}
        onTap={onSelect}
        ref={circleRef}
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
          const node = circleRef.current;
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
            radius: node.radius(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={circleTRRef}
          keepRatio={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right'
          ]}
          rotationSnaps={[0, 90, 180, 270]}
          anchorSize={Number(7)}
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

export default CircleComponent;
