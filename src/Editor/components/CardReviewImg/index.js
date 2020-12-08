import { Box, Flex, Img, Text } from '@chakra-ui/react';

export default function CardReviewImg({ user }) {
  return (
    <Flex>
      <Box>
        <Text
          fontSize="14px"
          letterSpacing="0.02em"
          fontWeight="bold"
          color="gray.700"
          mb="1rem"
        >
          Frente
        </Text>
        <Img
          src={
            user
              ? localStorage.getItem('frenteSangria')
              : localStorage.getItem('frenteFinal')
          }
          alt="Cartão Frente"
          boxShadow="0px 0px 8px 2px rgba(0, 0, 0, 0.2)"
          maxW="95%"
        />
      </Box>
      <Box>
        <Text
          fontSize="14px"
          letterSpacing="0.02em"
          fontWeight="bold"
          color="gray.700"
          mb="1rem"
        >
          Verso
        </Text>
        <Img
          src={
            user
              ? localStorage.getItem('versoSangria')
              : localStorage.getItem('versoFinal')
          }
          alt="Cartão Verso"
          boxShadow="0px 0px 8px 2px rgba(0, 0, 0, 0.2)"
          maxW="95%"
        />
      </Box>
    </Flex>
  );
}
