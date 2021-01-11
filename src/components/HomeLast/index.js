import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function HomeLast() {
  return (
    <Box h="100%" display={{ md: 'flex' }}>
      <Box
        display={{ md: 'flex' }}
        position={{ base: 'relative', md: 'initial' }}
        w="100%"
      >
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
                maxW={{ base: '307px', md: '525px' }}
                my="40px"
                as="h3"
              >
                Conexões abrem novas portas
              </Text>
              <Text
                letterSpacing="0.01em"
                color="white"
                fontSize="19px"
                lineHeight="30px"
                maxW={{ base: '300px', md: '525px' }}
                mb="40px"
              >
                Viemos para facilitar sua vida trazendo uma forma mais simples
                de desenvolver um bom cartão de visitas.
                <br />
                Ficou com alguma dúvida ou encontrou algum problema?
                <br />
                Entre em contato pela nossa central de ajuda.
              </Text>
              <Link href="/ajuda/">
                <Button
                  variant="link"
                  color="gray.900"
                  textTransform="normal"
                  fontWeight="bold"
                  letterSpacing="0.02em"
                  fontSize="16px"
                  mb={{ base: '50px', md: '0' }}
                  as="a"
                  cursor="pointer"
                >
                  Central de Ajuda <ChevronDownIcon h={8} w={8} />
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box w={{ base: '100vw', md: '50%' }}>
          <Img
            src="/static/footer-hero.jpg"
            w="100%"
            h={{ base: '690px', md: '100%' }}
            minH={{ base: '690px', md: 'auto' }}
            objectFit="cover"
            alt="Pessoa com tranquilidade por ter usado o cartão de visita do Hola Cartão"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
}
