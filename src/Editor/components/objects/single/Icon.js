import { useRef, useEffect } from 'react';
import { Group, Path, Transformer } from 'react-konva';

const IconComponent = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  icon
}) => {
  const groupRef = useRef();
  const groupTRRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      groupTRRef.current.nodes([groupRef.current]);
      groupTRRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const paths = icon.paths;

  return (
    <>
      <Group
        onClick={onSelect}
        onTap={onSelect}
        ref={groupRef}
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
          const node = groupRef.current;

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY()
          });
        }}
      >
        {paths.map((path) => {
          return <Path key={path.id} data={path.data} fill={icon.fill} />;
        })}
      </Group>
      {isSelected && (
        <Transformer
          ref={groupTRRef}
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
            if (newBox.scaleX < 0.1 || newBox.scaleY < 0.1) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default IconComponent;
