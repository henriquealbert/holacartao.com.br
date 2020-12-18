import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box
      backgroundImage={{
        base: 'url(/static/footer-bg.jpg)',
        md: 'url(/static/bg-footer-lg.jpg)'
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      p={{ base: '2rem', md: '3rem' }}
    >
      <Box maxW="1280px" m="0 auto">
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex mb={{ base: '3rem', md: '0' }}>
            <Box as="nav" mr="46px">
              <Text
                fontWeight="bold"
                fontSize="20px"
                letterSpacing="0.02em"
                color="white"
                mb="0.5rem"
              >
                Produtos
              </Text>
              <Box as="ul">
                <Text as="li" color="white">
                  <Link href="/modelos/">
                    <a>Modelos</a>
                  </Link>
                </Text>
                <Text as="li" color="white">
                  <a>Pacotes</a>
                </Text>
                <Text as="li" color="white">
                  <Link href="/criar-conta/">
                    <a>Criar Conta</a>
                  </Link>
                </Text>
                <Text as="li" color="white">
                  <Link href="/login/">
                    <a>Login</a>
                  </Link>
                </Text>
              </Box>
            </Box>
            <Box as="nav">
              <Text
                fontWeight="bold"
                fontSize="20px"
                letterSpacing="0.02em"
                color="white"
                mb="0.5rem"
              >
                Empresa
              </Text>
              <Box as="ul" w="170px">
                <Text as="li" color="white">
                  <Link href="/ajuda/">
                    <a>Central de Ajuda</a>
                  </Link>
                </Text>
                <Text as="li" color="white">
                  <Link href="/politica-privacidade/">
                    <a>Política de Privacidade</a>
                  </Link>
                </Text>
              </Box>
              <Text color="white" mt="1.75rem">
                ® {new Date().getFullYear()} Hola Cartão
              </Text>
            </Box>
          </Flex>
          <Flex
            pl={{ base: '0', md: '120px' }}
            justifyContent="space-between"
            w="100%"
          >
            <Box>
              <Text
                color="white"
                mb={{ base: '2rem', md: '1rem' }}
                maxW="250px"
              >
                Problemas? Entre em contato pelo: meajuda@holacartao.com.br
              </Text>
              <a
                href="https://www.instagram.com/holacartao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={AiFillInstagram} color="white" w={9} h={9} />
              </a>
            </Box>
            <Box
              maxW={{ base: '80px', md: 'none' }}
              alignSelf={{ base: 'flex-end', md: 'initial' }}
              mt={{ base: '6rem', md: '0' }}
            >
              <Link href="/">
                <a>
                  <Image
                    src="/static/logo-footer.png"
                    width="120px"
                    height="90px"
                    quality="100"
                  />
                </a>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
