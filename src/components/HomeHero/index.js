import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <Box h="100%" display={{ md: 'flex' }}>
      <Box
        display={{ md: 'flex' }}
        position={{ base: 'relative', md: 'initial' }}
        w="100%"
      >
        <Box w={{ base: '100vw', md: '50%' }}>
          <Img
            src="/static/hero.jpg"
            alt="Mulher Sorrindo para a solução Hola Cartão"
            w="100%"
            h={{ base: '100vh', md: '100vh' }}
            minH={{ base: '667px', md: 'auto' }}
            objectFit="cover"
          />
        </Box>
        <Box
          bg={{
            base:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 93.75%), rgba(29, 185, 84, 0.75)',
            md:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 93.75%), rgba(29, 185, 84, 1)'
          }}
          position={{ base: 'absolute', md: 'initial' }}
          top="0"
          w={{ base: '100vw', md: '50%' }}
          h={{ base: '100%', md: 'auto' }}
        >
          <Box
            display="flex"
            h="100%"
            w="100%"
            justifyContent="center"
            m="0 auto"
          >
            <Box
              alignSelf="flex-end"
              w={{ base: '', md: '100%' }}
              p={{ base: '', md: '50px' }}
            >
              <Text
                fontFamily="Roboto"
                fontSize="54px"
                fontWeight="500"
                lineHeight="66px"
                letterSpacing="0.01em"
                color="white"
                maxW={{ base: '325px', md: '525px' }}
                as="h1"
              >
                Uma solução <br /> em cartões de visita.
              </Text>
              <Text
                fontWeight="bold"
                letterSpacing="0.02em"
                color="white"
                fontSize="20px"
                fontFamily="Roboto"
                mt="30px"
                maxW={{ base: '325px', md: '525px' }}
                as="h2"
              >
                Crie seu cartão de visita online e receba impresso em casa em
                até 7 dias com frete grátis!
              </Text>
              <Flex
                my="25px"
                direction={{ base: 'column', lg: 'row' }}
                alignItems="center"
              >
                <Link href="/modelos/">
                  <Button
                    as="a"
                    variant="primary"
                    size="lg"
                    maxW="250px"
                    w="100%"
                    h="50px"
                    cursor="pointer"
                    mr={{ base: '', lg: '2rem' }}
                  >
                    Ver Modelos
                  </Button>
                </Link>

                <Link href="/modelos/">
                  <Button
                    as="a"
                    variant="outline"
                    size="lg"
                    maxW="250px"
                    w="100%"
                    h="50px"
                    mt={{ base: '20px', lg: '0' }}
                    cursor="pointer"
                  >
                    Criar meu Cartão
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
