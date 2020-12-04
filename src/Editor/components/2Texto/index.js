import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import { BsTypeItalic, BsTypeBold, BsTypeUnderline } from 'react-icons/bs';
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from 'react-icons/bi';
import FontPicker from 'font-picker-react';

import * as S from './styled';

export default function Item2({ openMenu, editorStore }) {
  const {
    addText,
    selectedId,
    setStore,
    store,
    text,
    setText,
    textFontFamily,
    setTextFontFamily,
    textFontSize,
    setTextFontSize,
    textFontStyle,
    setTextFontStyle,
    textFontDecoration,
    setTextFontDecoration,
    textAlign,
    setTextAlign,
    textLetterSpacing,
    setTextLetterSpacing
  } = editorStore;

  const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API;

  // Set Bold
  const handleBold = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const fontStyle = found[0].fontStyle;
      // check if has bold
      if (fontStyle.includes('bold')) {
        found[0].fontStyle = found[0].fontStyle.replace(/bold/i, '');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
      }
      // check if doesnt have bold
      if (fontStyle.includes('bold') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'bold ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
      }
    }
  };

  // Set Italic
  const handleItalic = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const fontStyle = found[0].fontStyle;
      // check if has italic
      if (fontStyle.includes('italic')) {
        found[0].fontStyle = found[0].fontStyle.replace(/italic/i, '');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
      }
      // check if doesnt have italic
      if (fontStyle.includes('italic') === false) {
        found[0].fontStyle = found[0].fontStyle.replace('', 'italic ');
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontStyle(found[0].fontStyle);
      }
    }
  };

  // Set Underline
  const handleUnderline = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      const textDecoration = found[0].textDecoration;
      // check if has underline
      if (textDecoration.includes('underline')) {
        found[0].textDecoration = found[0].textDecoration.replace(
          /underline/i,
          ''
        );
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontDecoration(found[0].textDecoration);
      }
      // check if doesnt have underline
      if (textDecoration.includes('underline') === false) {
        found[0].textDecoration = found[0].textDecoration.replace(
          '',
          'underline '
        );
        const elements = store.filter((element) => element.id !== selectedId);
        elements.push(found[0]);
        setStore(elements);
        setTextFontDecoration(found[0].textDecoration);
      }
    }
  };

  // Change Text Value
  const changeText = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].text = text;
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setText('');
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  // Change Font Family
  const handleFontFamily = (font) => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].fontFamily = font;
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextFontFamily(font);
    }
  };

  // Change Font Size
  const handleSize = (value) => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].fontSize = Number(value);
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextFontSize(found[0].fontSize);
    }
  };

  // Change Text Align
  const handleCenter = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'center';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };

  const handleLeft = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'left';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };

  const handleRight = () => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].align = 'right';
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextAlign(found[0].align);
    }
  };

  // change letter spacing
  const handleLetterSpacing = (value) => {
    if (selectedId !== null) {
      const found = store.filter((element) => element.id === selectedId);
      found[0].letterSpacing = Number(value);
      const elements = store.filter((element) => element.id !== selectedId);
      elements.push(found[0]);
      setStore(elements);
      setTextLetterSpacing(found[0].letterSpacing);
    }
  };

  return (
    <S.Wrapper className={openMenu === 'texto' ? 'open' : ''}>
      <Box p="24px">
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="12px"
        >
          Texto
        </Text>
        <Button
          variant="primary"
          backgroundColor="#57E589"
          px="36px"
          mb="18px"
          onClick={addText}
        >
          Adicionar Novo Texto
        </Button>
        <Textarea
          name="textarea"
          id="textarea"
          placeholder="Editar Texto"
          onChange={handleText}
          value={text}
          rows="2"
          cols="22"
          variant="primary"
          borderRadius="20px"
          backgroundColor="#E1E1E1"
        />
        <Button
          onClick={changeText}
          variant="primary"
          backgroundColor="#1ED760"
        >
          Alterar Texto
        </Button>
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          my="12px"
        >
          Fonte
        </Text>
        <S.SelectFont>
          <FontPicker
            apiKey={GOOGLE_API}
            activeFontFamily={textFontFamily}
            onChange={(nextFont) => handleFontFamily(nextFont.family)}
            limit={300}
            sort="popularity"
            className="fontPicker"
          />
        </S.SelectFont>
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          my="12px"
        >
          Estilos
        </Text>
        <Box>
          <IconButton
            variant="primary"
            background={
              textFontStyle?.includes('italic') ? 'gray.600' : 'black'
            }
            _hover={{ bg: 'gray.600' }}
            onClick={handleItalic}
            icon={<BsTypeItalic size="20px" />}
            mr={4}
          />
          <IconButton
            variant="primary"
            background={textFontStyle?.includes('bold') ? 'gray.600' : 'black'}
            _hover={{ bg: 'gray.600' }}
            onClick={handleBold}
            icon={<BsTypeBold size="20px" />}
            mr={4}
          />
          <IconButton
            variant="primary"
            background={
              textFontDecoration?.includes('underline') ? 'gray.600' : 'black'
            }
            _hover={{ bg: 'gray.600' }}
            onClick={handleUnderline}
            icon={<BsTypeUnderline size="20px" />}
          />
        </Box>
        <Flex mt={6}>
          <Text
            color="#6A6666"
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="bold"
            my="12px"
          >
            Tamanho
          </Text>
          <NumberInput
            name="tamanho"
            id="tamanho"
            value={textFontSize}
            onChange={handleSize}
            allowMouseWheel
            variant="primary"
            w="100px"
            ml={4}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <Flex mt={3} justifyContent="space-between">
          <Box>
            <Text
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="8px"
            >
              Alinhamento
            </Text>
            <IconButton
              onClick={handleLeft}
              icon={<BiAlignLeft size="25px" />}
              variant="ghost"
              background={textAlign?.includes('left') ? 'gray.100' : ''}
              boxShadow={
                textAlign?.includes('left')
                  ? 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)'
                  : ''
              }
            />
            <IconButton
              onClick={handleCenter}
              icon={<BiAlignMiddle size="25px" />}
              variant="ghost"
              background={textAlign?.includes('center') ? 'gray.100' : ''}
              boxShadow={
                textAlign?.includes('center')
                  ? 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)'
                  : ''
              }
            />

            <IconButton
              onClick={handleRight}
              icon={<BiAlignRight size="25px" />}
              variant="ghost"
              background={textAlign?.includes('right') ? 'gray.100' : ''}
              boxShadow={
                textAlign?.includes('right')
                  ? 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)'
                  : ''
              }
            />
          </Box>
          <Box mr={4}>
            <Text
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="8px"
            >
              Espaçamento
            </Text>
            <NumberInput
              name="letterSpacing"
              id="letterSpacing"
              value={textLetterSpacing}
              onChange={handleLetterSpacing}
              allowMouseWheel
              variant="primary"
              w="100px"
              ml={4}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
      </Box>
    </S.Wrapper>
  );
}
