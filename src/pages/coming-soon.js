import { Box, Flex, Heading, Text, Img } from '@chakra-ui/react';

export default function ComingSoon() {
  return (
    <Flex
      h="100vh"
      w="100%"
      direction="column"
      bg="linear-gradient(180deg, #FFFFFF 0%, #CBE0F1 100%)"
      justify="center"
      align="center"
      pos="relative"
    >
      <Flex
        w=" 624px"
        h=" 624px"
        pos="absolute"
        backgroundColor="white"
        borderRadius="50%"
        top="auto"
        left="auto"
        opacity="0.5"
        filter="blur(200px)"
      />
      <Box zIndex="1">
        <Heading
          as="h1"
          color="#00437A"
          fontSize="35px"
          fontFamily="Inter"
          fontWeight="600"
          letterSpacing="0.01em"
          textAlign="center"
        >
          Só mais um pouquinho...
        </Heading>
        <Text
          color="#285E79"
          mt="28px"
          fontSize="18px"
          fontFamily="Inter"
          fontWeight="500"
          letterSpacing="0.01em"
          textAlign="center"
        >
          Estamos trabalhando para melhorar sua experiência, em breve um novo
          site.
        </Text>
        <Img
          src="/images/hola-green-logo.png"
          alt="Hola Cartao Logo"
          mt="100px"
          mx="auto"
        />
      </Box>
    </Flex>
  );
}
