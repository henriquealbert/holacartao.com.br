import { Box, Icon, Text } from '@chakra-ui/react';

import * as S from './styled';
import useSWR from 'swr';

export default function Item3({ openMenu, editorStore }) {
  const {
    addRect,
    addCircle,
    addTriangle,
    addHexagon,
    addStar,
    setStore,
    store
  } = editorStore;
  // get icons list
  const { data, error } = useSWR('https://api.holacartao.com.br/icons');

  // format each icon to add the props that we need on store
  const formatedIconList = data?.map((icon) => ({
    ...icon,
    type: 'icon',
    fill: '#898D83',
    x: 22,
    y: 22,
    scaleX: 3,
    scaleY: 3
  }));

  // add icon to canvas
  const addIcon = (icon) => {
    setStore([...store, icon]);
  };

  return (
    <S.Wrapper className={openMenu === 'elementos' ? 'open' : ''}>
      <Box p="12px 24px">
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="8px"
        >
          Formas
        </Text>
        <S.SquareIcon onClick={addRect} />
        <S.CircleIcon onClick={addCircle} />
        <S.TriangleIcon onClick={addTriangle} />
        <S.HexagonFillIcon onClick={addHexagon} />
        <S.StarFillIcon onClick={addStar} />
        <Text
          color="#6A6666"
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="bold"
          mb="8px"
          mt={4}
        >
          Ícones
        </Text>
        <Box>
          {error ? (
            <Box>
              <Text color="red.500">Erro ao tentar carregar ícones.</Text>
            </Box>
          ) : (
            formatedIconList?.map((icon) => {
              return (
                <Box
                  as="button"
                  key={icon.id}
                  h="50px"
                  onClick={() => addIcon(icon)}
                  id={icon.name}
                >
                  <Icon color={icon.fill} boxSize="2rem">
                    {icon.paths.map((path) => {
                      return (
                        <path key={path.id} fill="currentColor" d={path.data} />
                      );
                    })}
                  </Icon>
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </S.Wrapper>
  );
}
