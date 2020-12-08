import * as S from './styled';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Box, Flex, Img, Text } from '@chakra-ui/react';

export default function Item4({ openMenu, editorStore }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const { setStore, store, imageLibrary, setImageLibrary } = editorStore;

  // add new image from file
  const addImage = async (e) => {
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

    const width =
      upload_res.data[0].width <= 50
        ? upload_res.data[0].width
        : upload_res.data[0].width / 2;

    const height =
      upload_res.data[0].height <= 50
        ? upload_res.data[0].height
        : upload_res.data[0].height / 2;

    const imgObject = {
      url: url,
      id: String(nanoid() + Date.now()),
      type: 'image',
      x: 0,
      y: 0,
      width: width,
      height: height
    };
    // adding to store
    setStore([...store, imgObject]);
    // adding to user Imagelibrary
    setImageLibrary((prev) => [...prev, imgObject]);
  };

  // Add new image based on the ones that have already been uploaded
  const addImgUploaded = (element) => {
    const newClickedImg = { ...element, id: nanoid(), x: 0, y: 0 };
    setStore([...store, newClickedImg]);
  };

  return (
    <S.SidebarMenuWrapper4 className={openMenu === 'imagem' ? 'open' : ''}>
      <Box p="12px 24px">
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="8px"
        >
          Imagens
        </Text>
        <S.AddImg>
          <label htmlFor="images-upload">
            <S.UploadIcon />
            Faça o Upload de uma Imagem
          </label>
          <input
            type="file"
            name="files"
            id="images-upload"
            onChange={addImage}
          />
        </S.AddImg>
        <Text
          color="gray.600"
          fontFamily="Roboto"
          fontSize="12px"
          textAlign="center"
        >
          Para logos, utilize imagens PNG com fundo transparente.
        </Text>

        <Box>
          <Text
            color="#6A6666"
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="bold"
            mb="8px"
            mt="1rem"
          >
            Imagens Carregadas
          </Text>
          <Flex>
            {imageLibrary.length === 0 ? (
              <Text color="gray.400" fontSize="12px">
                Você não fez upload de nenhuma imagem.
              </Text>
            ) : (
              imageLibrary.map((img) => {
                return (
                  <Box
                    as="button"
                    key={img.id}
                    onClick={() => addImgUploaded(img)}
                    maxW="100px"
                  >
                    <Img src={img.url} borderRadius="4px" />
                  </Box>
                );
              })
            )}
          </Flex>
        </Box>
      </Box>
    </S.SidebarMenuWrapper4>
  );
}
