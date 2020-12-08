import { Box, Img, Text } from '@chakra-ui/react';
import * as S from './styled';

export function InfoEditor() {
  return (
    <Box textAlign="center" my="auto">
      <Text
        color="gray.500"
        w="180px"
        letterSpacing="0.02em"
        mb="1rem"
        fontSize="18px"
      >
        Para começar clique nos botões ao lado.
      </Text>
      <Img src="/static/arrow-left.svg" alt="Arrow Left" m="0 auto" />
    </Box>
  );
}

export function FrenteEditor() {
  return (
    <S.SidesWrapper>
      <p>Frente</p>
    </S.SidesWrapper>
  );
}

export function VersoEditor() {
  return (
    <S.SidesWrapper>
      <p>Verso</p>
    </S.SidesWrapper>
  );
}
