import { useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import { changeDpiDataUrl } from 'changedpi';
import { useEditorStoreFrente } from '../../Frente/Store';

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

export default function EditorCanvaFrente({ BgId, editorStore }) {
  const {
    store,
    selectedId,
    setSelectedId,
    checkDeselect,
    updateElement,
    setText,
    imageBG,
    setSaveFinalCard,
    setSaveWithSangria
  } = editorStore;

  const { setSelectedId: setSelectedIdFrente } = useEditorStoreFrente();

  // Configs
  const stageRef = useRef(null);

  useEffect(() => {
    if (stageRef.current) {
      const stage = stageRef.current.getStage();
      const sangria = stageRef.current.getStage().findOne('#linha-sangria');
      const layer = stageRef.current.getStage().findOne('#layer');

      setSaveWithSangria(() => {
        return () => {
          setSelectedIdFrente(null);
          const dataURL = stage.toDataURL({ pixelRatio: 1.6796875 });
          const art = changeDpiDataUrl(dataURL, 300);
          return art;
        };
      });

      setSaveFinalCard(() => {
        return () => {
          sangria.remove();
          const dataURL = stage.toDataURL({ pixelRatio: 1.6796875 });
          const art = changeDpiDataUrl(dataURL, 300);
          layer.add(sangria);
          return art;
        };
      });
    }
  }, [setSaveWithSangria, setSaveFinalCard, setSelectedIdFrente]);

  return (
    <S.Wrapper>
      <Stage
        width={640}
        height={360.1860465116279}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer id="layer">
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
