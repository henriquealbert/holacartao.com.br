import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function HomeFeatures() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <Box
      maxW={{ base: '100%', lg: '1280px' }}
      my="120px"
      mx={{ base: '36px', lg: 'auto' }}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems={{ base: 'center', lg: 'initial' }}
      >
        <Box
          w={{ base: '100%', lg: '50%' }}
          textAlign={{ base: 'center', lg: 'initial' }}
        >
          <Image
            src="/static/cartoes.png"
            width={525}
            height={474}
            quality={100}
            alt="Modelos de Cartão de Visita para Editar"
          />
        </Box>
        <Box w={{ base: '100%', lg: '45%' }}>
          <Text
            as="h2"
            fontWeight="500"
            fontSize="55px"
            lineHeight="66px"
            letterSpacing="0.01em"
            color="gray.900"
            maxW="500px"
            mb="58px"
            mx={{ base: 'auto', lg: '0' }}
            textAlign={{ base: 'center', lg: 'initial' }}
          >
            Cuidamos da parte chata pra você
          </Text>
          <Text
            fontSize="19px"
            lineHeight="30px"
            letterSpacing="0.01em"
            color="gray.500"
            maxW="508px"
            mb="2rem"
            mx={{ base: 'auto', lg: '0' }}
          >
            Todos os nossos cartões possuem um{' '}
            <strong>
              padrão de qualidade. São feitos em papel couché 300g, tamanho
              9cmx5cm, frente com acabamento em verniz.
            </strong>
          </Text>
          <Text
            fontSize="19px"
            lineHeight="30px"
            letterSpacing="0.01em"
            color="gray.500"
            maxW="508px"
            mb="58px"
            mx={{ base: 'auto', lg: '0' }}
          >
            Desta forma você não precisa se preocupar com papelaria, formatos de
            arquivos, escala de cores e tempo de preparo.
          </Text>
          <Flex justifyContent={{ base: 'center', lg: 'initial' }}>
            <ScrollLink
              to="home-prices"
              smooth={true}
              duration={1000}
              title="Ver Pacotes"
            >
              <Button
                variant="outline"
                color="brand.200"
                borderColor="brand.200"
                size="lg"
                w="250px"
                h="50px"
              >
                $ Ver Pacotes
              </Button>
            </ScrollLink>
          </Flex>
        </Box>
      </Flex>
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        my={{ base: '50px', lg: '150px' }}
      >
        <Box>
          <Text
            as="h2"
            fontWeight="500"
            fontSize={{ base: '41px', lg: '55px' }}
            lineHeight={{ base: '51px', lg: '66px' }}
            letterSpacing="0.01em"
            color="gray.900"
            maxW="500px"
            mb="40px"
            mt={{ base: '2rem', lg: '0' }}
            textAlign={{ base: 'center', lg: 'right' }}
            mx={{ base: 'auto', lg: '0' }}
          >
            Junte-se a mais de 500 profissionais
          </Text>
          <Flex justifyContent={{ base: 'center', lg: 'flex-end' }} mb="40px">
            {stars.map((star) => {
              return (
                <Icon
                  key={star}
                  viewBox="0 0 40 40"
                  color="brand.200"
                  h="40px"
                  w="40px"
                  ml={{ base: '0.5rem', lg: '1rem' }}
                >
                  <path
                    d="M36.5784 15.2983C36.3634 14.6683 35.795 14.2233 35.1317 14.1716L25.63 13.4166L21.5184 4.31492C21.25 3.71659 20.655 3.33325 20 3.33325C19.345 3.33325 18.75 3.71659 18.4817 4.31325L14.37 13.4166L4.86838 14.1716C4.21671 14.2233 3.65505 14.6516 3.43338 15.2666C3.21171 15.8816 3.36838 16.5699 3.83671 17.0266L10.8584 23.8716L8.37505 34.6249C8.22171 35.2899 8.49005 35.9816 9.05171 36.3699C9.33838 36.5666 9.66838 36.6666 10 36.6666C10.3217 36.6666 10.645 36.5733 10.925 36.3866L20 30.3366L29.075 36.3866C29.655 36.7733 30.4167 36.7583 30.9834 36.3466C31.5467 35.9349 31.795 35.2133 31.6034 34.5433L28.555 23.8766L36.115 17.0733C36.6101 16.6266 36.7917 15.9299 36.5784 15.2983Z"
                    fill="currentColor"
                  />
                </Icon>
              );
            })}
          </Flex>
          <Text
            fontSize="19px"
            lineHeight="30px"
            letterSpacing="0.01em"
            color="gray.500"
            maxW="368px"
            textAlign={{ base: 'center', lg: 'right' }}
            m={{ base: '0 auto 1rem', lg: '0 0 1rem auto' }}
          >
            “Ótimo serviço com preços acessíveis para quem está começando
            empreender.”
          </Text>
          <Text
            letterSpacing="0.01em"
            color="gray.400"
            textAlign={{ base: 'center', lg: 'right' }}
            mb="36px"
            mx={{ base: 'auto', lg: 'initial' }}
          >
            Luís dos Santos, Balneário Camboriú.
          </Text>
          <Flex justifyContent={{ base: 'center', lg: 'flex-end' }}>
            <Link href="/modelos/">
              <Button
                variant="primary"
                w="250px"
                h="50px"
                as="a"
                cursor="pointer"
              >
                Ver Modelos
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box textAlign={{ base: 'center', lg: 'initial' }}>
          <Image
            src="/static/testmonials.jpg"
            width={582}
            height={380}
            quality={100}
            alt="Confiança e depoimentos de outras pessoas"
          />
        </Box>
      </Flex>
    </Box>
  );
}
