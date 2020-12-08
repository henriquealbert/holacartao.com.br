import * as S from './styled';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text
} from '@chakra-ui/react';

export default function Item5({ openMenu, editorStore }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const {
    setStore,
    store,
    colorBG,
    setColorBG,
    setImageBG,
    imageBG
  } = editorStore;

  // change bg color
  const changeColorBG = () => {
    const bg = store.filter((element) => element.type === 'bg');
    bg[0].fill = colorBG;
    const elements = store.filter((element) => element.id !== bg[0].id);
    elements.push(bg[0]);
    setStore(elements);
  };

  // get all img-bg
  const imgsbgs = store.filter((element) => element.type === 'image-bg');

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (file === undefined) {
      return;
    }
    const data = new FormData();
    data.append('files', file);
    const upload_res = await axios({
      method: 'POST',
      url: `${API_URL}/upload`,
      data
    });
    const url = `${API_URL}${upload_res.data[0].url}`;
    const imgObject = {
      url: url,
      id: String(nanoid() + Date.now()),
      type: 'image-bg',
      x: 320,
      y: 180.5,
      width: 640,
      height: 361,
      rotation: 0
    };
    setImageBG(imgObject);
    // adding to store
    setStore([...store, imgObject]);
  };

  const removeImage = () => {
    if (imgsbgs.length > 0) {
      setImageBG('');
      const elements = store.filter((element) => element.id !== imgsbgs[0].id);
      setStore(elements);
    }
  };

  const handleChangeInputs = (value, option) => {
    if (!imageBG.id) {
      return;
    }

    if (option === 'height') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].height = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'width') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].width = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'x') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].x = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'y') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].y = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'rotation') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].rotation = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
  };

  return (
    <S.SidebarMenuWrapper5 className={openMenu === 'fundo' ? 'open' : ''}>
      <Box p="12px 24px">
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="12px"
        >
          Cor de fundo
        </Text>
        <Box mb="18px">
          <SketchPicker
            color={colorBG}
            disableAlpha={true}
            onChange={(color) => {
              setColorBG(color.hex);
            }}
            onChangeComplete={changeColorBG}
            presetColors={[]}
            width="100%"
          />
        </Box>
        <S.AddImg>
          <input
            type="file"
            name="files"
            id="image-upload"
            onChange={handleChange}
          />
          <label htmlFor="image-upload">
            <S.UploadIcon />
            Faça o Upload de uma Imagem
          </label>
        </S.AddImg>
        <Flex justifyContent="center" my="12px">
          <Button
            variant="link"
            onClick={removeImage}
            color="blue.500"
            textDecoration="underline"
            _hover={{ color: 'blue.700' }}
            fontSize="14px"
            fontFamily="Roboto"
          >
            Remover imagem de fundo
          </Button>
        </Flex>
        <Flex wrap="wrap">
          <Box>
            <FormLabel
              htmlFor="height"
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="6px"
            >
              Altura
            </FormLabel>
            <NumberInput
              name="height"
              id="height"
              value={imageBG.height}
              onChange={(value) => handleChangeInputs(value, 'height')}
              allowMouseWheel
              variant="primary"
              w="80px"
              min="0"
              mr="14px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box>
            <FormLabel
              htmlFor="width"
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="6px"
            >
              Largura
            </FormLabel>
            <NumberInput
              name="width"
              id="width"
              value={imageBG.width}
              onChange={(value) => handleChangeInputs(value, 'width')}
              allowMouseWheel
              variant="primary"
              w="80px"
              min="0"
              mr="14px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box>
            <FormLabel
              htmlFor="rotation"
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="6px"
            >
              Girar
            </FormLabel>
            <NumberInput
              name="rotation"
              id="rotation"
              value={imageBG.rotation}
              onChange={(value) => handleChangeInputs(value, 'rotation')}
              allowMouseWheel
              variant="primary"
              w="80px"
              min="-360"
              max="360"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box mt="12px">
            <FormLabel
              htmlFor="x"
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="6px"
            >
              X
            </FormLabel>
            <NumberInput
              name="x"
              id="x"
              value={imageBG.x}
              onChange={(value) => handleChangeInputs(value, 'x')}
              allowMouseWheel
              variant="primary"
              w="80px"
              min="0"
              mr="14px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box mt="12px">
            <FormLabel
              htmlFor="y"
              color="#6A6666"
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="bold"
              mb="6px"
            >
              Y
            </FormLabel>
            <NumberInput
              name="y"
              id="y"
              value={imageBG.y}
              onChange={(value) => handleChangeInputs(value, 'y')}
              allowMouseWheel
              variant="primary"
              w="80px"
              min="0"
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
    </S.SidebarMenuWrapper5>
  );
}
