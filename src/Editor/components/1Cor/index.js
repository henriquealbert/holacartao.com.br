import * as S from './styled';
import { SketchPicker } from 'react-color';
import { Box, Text } from '@chakra-ui/react';

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
      <Box p="24px">
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="12px"
        >
          Cor do elemento ou texto
        </Text>
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
      </Box>
    </S.Wrapper>
  );
}
