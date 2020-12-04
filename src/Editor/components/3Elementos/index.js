import { Box, Icon, Text } from '@chakra-ui/react';

import GET_ICONS_LIST from '@/graphql/queries/GetIconsList';
import { useFetch } from '@/hooks/useFetch';
import * as S from './styled';

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
  const { data, error } = useFetch(GET_ICONS_LIST);

  // format each icon to add the props that we need on store
  const formatedIconList = data?.icons.map((icon) => ({
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
      <S.ContentWrapper>
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
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
