import * as S from './styled';
import { SketchPicker } from 'react-color';

export default function Item1({ openMenu, editorStore }) {
  const {
    selectedId,
    store,
    setStore,
    color,
    setColor,
    presetColors,
    setPresetColors
  } = editorStore;

  const changeColor = (color) => {
    if (selectedId === null) {
      return;
    }
    const found = store.filter((element) => element.id === selectedId);
    found[0].fill = color;
    const elements = store.filter((element) => element.id !== selectedId);
    elements.push(found[0]);
    setStore(elements);
    setColor(found[0].fill);
  };

  const handleChangeComplete = () => {
    if (presetColors.length === 32) {
      return;
    }
    setPresetColors((prev) =>
      prev.concat({
        color: color,
        title: color + Math.random()
      })
    );
  };

  return (
    <S.Wrapper className={openMenu === 'cor' ? 'open' : ''}>
      <S.Content>
        <p>Cor do Elemento ou Texto</p>
        <SketchPicker
          color={color}
          value={color}
          disableAlpha={true}
          onChange={(color) => {
            setColor(color.hex);
            changeColor(color.hex);
          }}
          onChangeComplete={handleChangeComplete}
          presetColors={presetColors}
          width="100%"
        />
      </S.Content>
    </S.Wrapper>
  );
}
