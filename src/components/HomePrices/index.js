import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';

import {
  BasicPrice,
  StandardPrice,
  CinquecentoPrice
} from '@/components/PricingOptions';

export default function HomePrices() {
  return (
    <Box
      maxW={{ base: '100%', lg: '1280px' }}
      my="120px"
      mx={{ base: '36px', lg: 'auto' }}
      id="home-prices"
    >
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems={{ base: 'center', lg: 'initial' }}
      >
        <Flex
          direction="column"
          justifyContent="space-around"
          alignItems={{ base: 'center', lg: 'flex-end' }}
          pr={{ lg: '132px' }}
          w="50%"
        >
          <Box mb="2rem">
            <BasicPrice />
          </Box>
          <Box mb="2rem">
            <StandardPrice home />
          </Box>
          <CinquecentoPrice />
        </Flex>
        <Box w={{ base: '100%', lg: '45%' }} mb={{ base: '2rem', lg: '0' }}>
          <Text
            as="h2"
            fontWeight="500"
            fontSize="55px"
            lineHeight="66px"
            letterSpacing="0.01em"
            color="gray.900"
            mb="40px"
            mx={{ base: 'auto', lg: '0' }}
            textAlign={{ base: 'center', lg: 'initial' }}
          >
            Você que manda
          </Text>
          <Box
            fontSize="19px"
            lineHeight="30px"
            letterSpacing="0.01em"
            color="gray.500"
            maxW="432px"
            mx={{ base: 'auto', lg: '0' }}
            mb="40px"
          >
            <Text mb="1rem">
              Escolha o pacote ideal para a sua necessidade, 100, 250 ou até 500
              unidades de cartões de visita.
            </Text>
            <Text mb="1rem">
              O frete é grátis na compra de qualquer pacote, e todos os pacotes
              podem ser parcelados em até 12x pelo Mercado Pago.
            </Text>
            <Text>
              Todos os nossos modelos são tamanho 9x5 cm, feitos em papel couché
              300g com acabamento de verniz total na parte da frente.
            </Text>
          </Box>
          <Flex justifyContent={{ base: 'center', lg: 'initial' }}>
            <Link href="/modelos/">
              <Button
                variant="primary"
                w="300px"
                h="50px"
                as="a"
                cursor="pointer"
              >
                Criar meu cartão agora
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="90px"
      >
        <Text
          fontSize="12px"
          fontWeight="bold"
          textTransform="uppercase"
          mb="2rem"
        >
          <Text as="span" mr="0.5rem">
            🔒
          </Text>
          compra segura
        </Text>
        <Flex
          alignItems="center"
          maxH={{ lg: '80px' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Img
            src="/static/quality.png"
            w="auto"
            h="100%"
            pr="2rem"
            pb="2rem"
          />
          <Img
            src="/static/mercadopago.png"
            w="auto"
            h="100%"
            pr="2rem"
            pb="2rem"
          />
          <Img src="/static/boleto.png" w="auto" h="100%" pr="2rem" pb="2rem" />
          <Img
            src="/static/credit-card.png"
            w="auto"
            h="100%"
            pr="2rem"
            pb="2rem"
          />
          <Img src="/static/google-security.png" w="auto" h="100%" pb="2rem" />
        </Flex>
      </Flex>
    </Box>
  );
}
