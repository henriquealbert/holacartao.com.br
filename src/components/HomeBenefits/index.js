import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

const GradientText = styled.h2`
  font-size: 180px;
  font-weight: 500;
  line-height: 140px;
  letter-spacing: 0.01em;
  background: linear-gradient(
    180deg,
    rgba(29, 185, 0, 1) 0%,
    rgba(30, 215, 96, 1) 50%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 630px;
  display: none;

  @media (min-width: 62em) {
    display: block;
  }
`;

export default function HomeBenefits() {
  return (
    <Box
      maxW={{ base: '100%', lg: '1280px' }}
      my="120px"
      mx={{ base: '36px', lg: 'auto' }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'initial', md: 'center' }}
      >
        <GradientText>sem stress</GradientText>
        <Box position="relative">
          <Image
            src="/static/mulher-home.jpg"
            height={379}
            width={582}
            quality="100"
          />
          <Box
            display={{ base: 'block', lg: 'none' }}
            position="absolute"
            bottom="130px"
          >
            <Text
              color="white"
              fontWeight="500"
              fontSize="100px"
              lineHeight="90px"
              letterSpacing="0.01em"
            >
              sem
              <Text as="span" display="block" color="brand.100">
                stress
              </Text>
            </Text>
          </Box>
          <Text
            fontWeight="bold"
            color={{ base: 'gray.900', lg: 'white' }}
            fontSize="20px"
            lineHeight="37px"
            letterSpacing="0.01em"
            position={{ base: 'unset', lg: 'absolute' }}
            bottom={{ base: 'none', lg: '26px' }}
            left={{ base: 'none', lg: '26px' }}
            mt={{ base: '100px', lg: '0' }}
          >
            Sem contato com gráficas
            <br />
            Sem contratar um designer
            <br />
            Sem sair de casa
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
