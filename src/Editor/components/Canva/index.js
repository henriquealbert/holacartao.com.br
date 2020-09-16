import { useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';

// Styles
import * as S from './styled';

// Components
import BackgroundColor from '../objects/list/BackgroundColor';
import BackgroundImage from '../objects/list/BackgroundImage';
import LinhaSangria from '../objects/list/LinhaSangria';

import Circles from '../objects/list/Circles';
import Rectangles from '../objects/list/Rectangles';
import Polygons from '../objects/list/Polygons';
import Icons from '../objects/list/Icons';
import Images from '../objects/list/Images';
import Stars from '../objects/list/Stars';
import Texts from '../objects/list/Texts';

export default function EditorCanvaFrente({
  setFrontCardImg,
  BgId,
  editorStore
}) {
  const {
    store,
    selectedId,
    setSelectedId,
    checkDeselect,
    updateElement,
    setText,
    imageBG
  } = editorStore;
  // Configs
  const stageRef = useRef(null);

  useEffect(() => {
    return () => {
      if (setFrontCardImg !== undefined) {
        const img = document
          .getElementsByTagName('canvas')[0]
          .toDataURL('image/png', 1.0);
        setFrontCardImg(img);
      }
    };
  }, [setFrontCardImg]);

  return (
    <S.Wrapper>
      <Stage
        width={640}
        height={360.0123494905835}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <BackgroundColor store={store} BgId={BgId} />
          <BackgroundImage imageBG={imageBG} />

          <LinhaSangria />

          {/* Formas */}
          <Rectangles
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Circles
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Polygons
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Icons
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Images
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Stars
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
          />
          <Texts
            store={store}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
            setText={setText}
          />
        </Layer>
      </Stage>
    </S.Wrapper>
  );
}
