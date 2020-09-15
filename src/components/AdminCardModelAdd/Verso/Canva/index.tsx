import { useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Image } from 'react-konva';
import useImage from 'use-image';
import { changeDpiDataUrl } from 'changedpi';
import { useEditorStoreVerso } from '../Store';
import { WarningsEditor, VersoEditor } from '../Infos';
import EditorChangeSide from '../ChangeSide';
import { useEditorUtilsContext } from '../../Context/EditorUtilsContext';

// Styles
import * as S from './styled';

// Components
import RectangleComponent from '../../Objects/Rectangle';
import CircleComponent from '../../Objects/Circle';
import PolygonComponent from '../../Objects/Polygon';
import StarComponent from '../../Objects/Star';
import TextComponent from '../../Objects/Text';
import ImageComponent from '../../Objects/Image';
import IconComponent from '../../Objects/Icon';

const URL = 'http://127.0.0.1:3000/images/user.png';

export default function EditorCanvaVerso() {
  // store
  const {
    store,
    selectedId,
    setSelectedId,
    checkDeselect,
    updateElement,
    setText,
    imageBG
  } = useEditorStoreVerso();

  const [image] = useImage(URL, 'Anonimus');
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      if (image) {
        // you many need to reapply cache on some props changes like shadow, stroke, etc.
        imageRef.current.cache();
        // since this update is not handled by "react-konva" and we are using Konva methods directly
        // we have to redraw layer manually
        imageRef.current.getLayer().batchDraw();
      }
    }
  }, [image]);

  // Formas
  const bg = store.filter((element) => element.type === 'bg');

  const [imgBG] = useImage(imageBG?.url, 'Anonymous');

  const rects = store.filter((element) => element.type === 'rect');
  const circles = store.filter((element) => element.type === 'circle');
  const polygons = store.filter((element) => element.type === 'polygon');
  const stars = store.filter((element) => element.type === 'star');
  const txts = store.filter((element) => element.type === 'text');
  const imgs = store.filter((element) => element.type === 'image');
  const icons = store.filter((element) => element.type === 'icon');

  // Configs

  const stageRef = useRef(null);

  // function downloadURI(uri, name) {
  //   const link = document.createElement('a');
  //   link.download = name;
  //   link.href = uri;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  // useEffect(() => {
  //   if (stageRef.current) {
  //     const stage = stageRef.current.getStage();
  //     const sangria = stageRef.current.getStage().findOne('#linha-sangria');

  //     setHandleSave(() => {
  //       return () => {
  //         sangria.remove();
  //         const dataURL = stage.toDataURL({ pixelRatio: 5.0609375 });
  //         const daurl150dpi = changeDpiDataUrl(dataURL, 904);
  //         downloadURI(daurl150dpi, 'teste.jpg');
  //       };
  //     });
  //   }
  // }, [setHandleSave]);

  return (
    <S.EditorContainer>
      <S.EditorWrapper>
        <WarningsEditor />
        <VersoEditor />

        <div id="verso-cartao">
          <Stage
            width={640}
            height={360.0123494905835}
            className="frontal-card"
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Layer>
              {bg.map((bg) => {
                return (
                  <Rect
                    key={bg.id}
                    fill={bg.fill}
                    width={bg.width}
                    height={bg.height}
                    onChange={(newAttrs) => {
                      updateElement(bg.id, newAttrs);
                    }}
                    id="bg-verso"
                  />
                );
              })}
              <Image
                image={imgBG}
                x={imageBG?.x}
                y={imageBG?.y}
                width={imageBG?.width}
                height={imageBG?.height}
              />
              <Rect
                id="linha-sangria"
                width={580}
                height={300.0123494905835}
                stroke="red"
                strokeWidth={1}
                x={30}
                y={30}
              />

              {rects.map((rect) => {
                return (
                  <RectangleComponent
                    key={rect.id}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => {
                      setSelectedId(rect.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(rect.id, newAttrs);
                    }}
                    color={rect.fill}
                  />
                );
              })}
              {circles.map((circle) => {
                return (
                  <CircleComponent
                    key={circle.id}
                    shapeProps={circle}
                    isSelected={circle.id === selectedId}
                    onSelect={() => {
                      setSelectedId(circle.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(circle.id, newAttrs);
                    }}
                    color={circle.fill}
                  />
                );
              })}
              {polygons.map((polygon) => {
                return (
                  <PolygonComponent
                    key={polygon.id}
                    shapeProps={polygon}
                    isSelected={polygon.id === selectedId}
                    onSelect={() => {
                      setSelectedId(polygon.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(polygon.id, newAttrs);
                    }}
                    color={polygon.fill}
                  />
                );
              })}

              {stars.map((star) => {
                return (
                  <StarComponent
                    key={star.id}
                    shapeProps={star}
                    isSelected={star.id === selectedId}
                    onSelect={() => {
                      setSelectedId(star.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(star.id, newAttrs);
                    }}
                    color={star.fill}
                  />
                );
              })}

              {txts.map((text) => {
                return (
                  <TextComponent
                    key={text.id}
                    shapeProps={text}
                    isSelected={text.id === selectedId}
                    onSelect={() => {
                      setSelectedId(text.id);
                      setText(text.text);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(text.id, newAttrs);
                    }}
                  />
                );
              })}

              {imgs.map((img) => {
                return (
                  <ImageComponent
                    key={img.id}
                    shapeProps={img}
                    isSelected={img.id === selectedId}
                    onSelect={() => {
                      setSelectedId(img.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(img.id, newAttrs);
                    }}
                    image={img}
                  />
                );
              })}

              {icons.map((icon) => {
                return (
                  <IconComponent
                    key={icon.id}
                    shapeProps={icon}
                    isSelected={icon.id === selectedId}
                    onSelect={() => {
                      setSelectedId(icon.id);
                    }}
                    onChange={(newAttrs) => {
                      updateElement(icon.id, newAttrs);
                    }}
                    icon={icon}
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>

        <EditorChangeSide />
      </S.EditorWrapper>
    </S.EditorContainer>
  );
}
