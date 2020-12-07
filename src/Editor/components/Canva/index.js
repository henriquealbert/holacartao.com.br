import { useEffect, useRef } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { changeDpiDataUrl } from 'changedpi';
import { Box } from '@chakra-ui/react';
import Konva from 'konva';

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
import Scales from '../Scales';

export default function EditorCanvaFrente({ BgId, editorStore }) {
  const {
    store,
    checkDeselect,
    imageBG,
    setSaveFinalCard,
    setSaveWithSangria
  } = editorStore;

  // Configs
  const stageRef = useRef(null);

  useEffect(() => {
    if (stageRef.current) {
      const stage = stageRef.current.getStage();
      const sangria = stageRef.current.getStage().findOne('#linha-sangria');
      const layer = stageRef.current.getStage().findOne('#layer');

      setSaveWithSangria(() => {
        return () => {
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
  }, [setSaveWithSangria, setSaveFinalCard]);

  // snaping grids and lines
  useEffect(() => {
    if (stageRef.current) {
      const stage = stageRef.current.getStage();
      const layer = stageRef.current.getStage().findOne('#formas');

      const GUIDELINE_OFFSET = 5;
      // were can we snap our objects?
      const getLineGuideStops = (skipShape) => {
        // we can snap to stage borders and the center of the stage
        const vertical = [0, stage.width() / 2, stage.width()];
        var horizontal = [0, stage.height() / 2, stage.height()];

        // and we snap over edges and center of each object on the canvas
        stage.find('.object').forEach((guideItem) => {
          if (guideItem === skipShape) {
            return;
          }
          var box = guideItem.getClientRect();
          // and we can snap to all edges of shapes
          vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
          horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
        });
        return {
          vertical: vertical.flat(),
          horizontal: horizontal.flat()
        };
      };

      // what points of the object will trigger to snapping?
      // it can be just center of the object
      // but we will enable all edges and center
      const getObjectSnappingEdges = (node) => {
        var box = node.getClientRect();
        var absPos = node.absolutePosition();
        return {
          vertical: [
            {
              guide: Math.round(box.x),
              offset: Math.round(absPos.x - box.x),
              snap: 'start'
            },
            {
              guide: Math.round(box.x + box.width / 2),
              offset: Math.round(absPos.x - box.x - box.width / 2),
              snap: 'center'
            },
            {
              guide: Math.round(box.x + box.width),
              offset: Math.round(absPos.x - box.x - box.width),
              snap: 'end'
            }
          ],
          horizontal: [
            {
              guide: Math.round(box.y),
              offset: Math.round(absPos.y - box.y),
              snap: 'start'
            },
            {
              guide: Math.round(box.y + box.height / 2),
              offset: Math.round(absPos.y - box.y - box.height / 2),
              snap: 'center'
            },
            {
              guide: Math.round(box.y + box.height),
              offset: Math.round(absPos.y - box.y - box.height),
              snap: 'end'
            }
          ]
        };
      };

      // find all snapping possibilities
      const getGuides = (lineGuideStops, itemBounds) => {
        var resultV = [];
        var resultH = [];

        lineGuideStops.vertical.forEach((lineGuide) => {
          itemBounds.vertical.forEach((itemBound) => {
            var diff = Math.abs(lineGuide - itemBound.guide);
            // if the distance between guild line and object snap point is close we can consider this for snapping
            if (diff < GUIDELINE_OFFSET) {
              resultV.push({
                lineGuide: lineGuide,
                diff: diff,
                snap: itemBound.snap,
                offset: itemBound.offset
              });
            }
          });
        });

        lineGuideStops.horizontal.forEach((lineGuide) => {
          itemBounds.horizontal.forEach((itemBound) => {
            var diff = Math.abs(lineGuide - itemBound.guide);
            if (diff < GUIDELINE_OFFSET) {
              resultH.push({
                lineGuide: lineGuide,
                diff: diff,
                snap: itemBound.snap,
                offset: itemBound.offset
              });
            }
          });
        });

        var guides = [];

        // find closest snap
        var minV = resultV.sort((a, b) => a.diff - b.diff)[0];
        var minH = resultH.sort((a, b) => a.diff - b.diff)[0];
        if (minV) {
          guides.push({
            lineGuide: minV.lineGuide,
            offset: minV.offset,
            orientation: 'V',
            snap: minV.snap
          });
        }
        if (minH) {
          guides.push({
            lineGuide: minH.lineGuide,
            offset: minH.offset,
            orientation: 'H',
            snap: minH.snap
          });
        }

        return guides;
      };

      const drawGuides = (guides) => {
        guides.forEach((lg) => {
          if (lg.orientation === 'H') {
            const line = new Konva.Line({
              points: [-6000, 0, 6000, 0],
              stroke: 'rgb(0, 161, 255)',
              strokeWidth: 1,
              name: 'guid-line',
              dash: [4, 6]
            });
            layer.add(line);
            line.absolutePosition({
              x: 0,
              y: lg.lineGuide
            });
            layer.batchDraw();
          } else if (lg.orientation === 'V') {
            const line = new Konva.Line({
              points: [0, -6000, 0, 6000],
              stroke: 'rgb(0, 161, 255)',
              strokeWidth: 1,
              name: 'guid-line',
              dash: [4, 6]
            });
            layer.add(line);
            line.absolutePosition({
              x: lg.lineGuide,
              y: 0
            });
            layer.batchDraw();
          }
        });
      };

      layer.on('dragmove', function (e) {
        // clear all previous lines on the screen
        layer.find('.guid-line').destroy();

        // find possible snapping lines
        var lineGuideStops = getLineGuideStops(e.target);
        // find snapping points of current object
        var itemBounds = getObjectSnappingEdges(e.target);

        // now find where can we snap current object
        var guides = getGuides(lineGuideStops, itemBounds);

        // do nothing of no snapping
        if (!guides.length) {
          return;
        }

        drawGuides(guides);

        var absPos = e.target.absolutePosition();
        // now force object position
        guides.forEach((lg) => {
          switch (lg.snap) {
            case 'start': {
              switch (lg.orientation) {
                case 'V': {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case 'H': {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
            case 'center': {
              switch (lg.orientation) {
                case 'V': {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case 'H': {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
            case 'end': {
              switch (lg.orientation) {
                case 'V': {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case 'H': {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
          }
        });
        e.target.absolutePosition(absPos);
      });

      layer.on('dragend', function () {
        // clear all previous lines on the screen
        layer.find('.guid-line').destroy();
        layer.batchDraw();
      });

      layer.draw();
    }
  }, []);

  return (
    <Box boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.2)" position="relative">
      <Scales />
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
        </Layer>

        <Layer id="formas">
          <Group>
            <Circles editorStore={editorStore} />
            <Rectangles editorStore={editorStore} />
            <Polygons editorStore={editorStore} />
            <Icons editorStore={editorStore} />
            <Images editorStore={editorStore} />
            <Stars editorStore={editorStore} />
            <Texts editorStore={editorStore} />
          </Group>
        </Layer>
      </Stage>
    </Box>
  );
}
