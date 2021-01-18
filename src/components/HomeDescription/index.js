import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 48%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 51.5%;
  }
`;

export default function HomeDescription() {
  return (
    <Box
      maxW={{ base: '100%', lg: '1280px' }}
      my="120px"
      mx={{ base: '36px', lg: 'auto' }}
    >
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box>
          <Text
            color="gray.900"
            as="h2"
            fontWeight="500"
            fontSize="55px"
            lineHeight="66px"
            letterSpacing="0.01em"
            maxW="400px"
            mb="40px"
            textAlign={{ base: 'center', lg: 'left' }}
            mx={{ base: 'auto', lg: '0' }}
          >
            Crie em poucos minutos
          </Text>
          <Text
            color="gray.500"
            fontSize="18px"
            letterSpacing="0.01em"
            maxW="325px"
            mb="40px"
            textAlign={{ base: 'center', lg: 'left' }}
            mx={{ base: 'auto', lg: '0' }}
          >
            Nossa ferramenta de criar cartão de visita é fácil de mexer e te
            permite soltar a criatividade!
          </Text>
          <Flex
            justifyContent={{ base: 'center', lg: 'normal' }}
            mb={{ base: '40px', lg: '0' }}
          >
            <Link href="/modelos/">
              <Button
                variant="primary"
                size="lg"
                as="a"
                cursor="pointer"
                h="50px"
                w="250px"
              >
                Ver Modelos
              </Button>
            </Link>
          </Flex>
        </Box>
        <Flex maxW="720px" w="100%">
          <VideoWrapper>
            <iframe
              src="https://fast.wistia.net/embed/iframe/r36917efm3?seo=false&videoFoam=true"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </Flex>
      </Flex>
      <Flex
        mt={{ base: '40px', md: '120px' }}
        justifyContent="space-around"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="320px" textAlign="center" mb={{ base: '40px', md: '0' }}>
          <Icon
            viewBox="0 0 37 40"
            w="50px"
            h="50px"
            color="brand.200"
            fill="none"
            mb="34px"
          >
            <path
              d="M8.7914 14.0122L8.79099 14.0129L4.61462 21.5363L4.61336 21.5385C4.59591 21.5698 4.58268 21.6126 4.58268 21.6666V26.6666C4.58268 27.7887 5.40195 28.4999 6.16601 28.4999H6.24464H7.55702L7.73135 29.8006C8.0244 31.9873 9.71025 33.4999 11.5618 33.4999C13.4134 33.4999 15.0993 31.9873 15.3923 29.8006L15.5667 28.4999H16.8791H21.6613H22.9737L23.148 29.8006C23.4411 31.9873 25.1269 33.4999 26.9785 33.4999C28.9244 33.4999 30.6942 31.8232 30.8418 29.4629L30.8906 28.6836L31.5569 28.2765C32.0446 27.9786 32.416 27.3898 32.416 26.6666V9.9999C32.416 8.87773 31.5967 8.16656 30.8327 8.16656H15.4329C15.4311 8.1682 15.429 8.17026 15.4266 8.17284C15.4053 8.19588 15.3743 8.24838 15.3743 8.33323V11.6666V13.1666H13.8743H10.1219C9.63032 13.1666 9.10009 13.4554 8.7914 14.0122ZM13.8743 13.4999H15.3743V14.9999V19.9999V21.4999H13.8743H7.34693H4.7989L6.03539 19.272L8.81039 14.272L9.2389 13.4999H10.1219H13.8743ZM30.791 29.1666C30.791 31.2611 29.1899 33.1666 26.9785 33.1666C24.7672 33.1666 23.166 31.2611 23.166 29.1666C23.166 27.0721 24.7672 25.1666 26.9785 25.1666C29.1899 25.1666 30.791 27.0721 30.791 29.1666ZM15.3743 29.1666C15.3743 31.2611 13.7732 33.1666 11.5618 33.1666C9.35049 33.1666 7.74935 31.2611 7.74935 29.1666C7.74935 27.0721 9.35049 25.1666 11.5618 25.1666C13.7732 25.1666 15.3743 27.0721 15.3743 29.1666Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </Icon>
          <Text
            as="h3"
            fontSize="20px"
            fontWeight="bold"
            letterSpacing="0.02em"
            mb="12px"
          >
            Receba em Casa + Frete Grátis
          </Text>
          <Text color="gray.500">
            Entregamos para Porto Alegre, Balneário Camboriú, Belo Horizonte e
            São Paulo Capital em até 7 dias úteis!
          </Text>
        </Box>
        <Box maxW="320px" textAlign="center">
          <Icon
            viewBox="0 0 40 40"
            w="50px"
            h="50px"
            color="brand.200"
            fill="none"
            mb="34px"
          >
            <path
              d="M11.8333 26.6667V27.7189C11.6234 27.4208 11.5 27.0577 11.5 26.6667V6.66671C11.5 6.2757 11.6234 5.91265 11.8333 5.61451V6.66671V26.6667ZM13.3333 28.5C12.9423 28.5 12.5793 28.3766 12.2811 28.1667H13.3333H33.3367H34.3855C34.0874 28.3766 33.7243 28.5 33.3333 28.5H13.3333ZM35.1667 26.6667C35.1667 27.0555 35.0446 27.4167 34.8368 27.7139L34.8367 26.6665L34.8333 6.66646L34.8332 5.61426C35.0432 5.91244 35.1667 6.27559 35.1667 6.66671V26.6667ZM33.3333 4.83337C33.7243 4.83337 34.0874 4.95681 34.3855 5.16671H33.3333H13.3333H12.2811C12.5793 4.95681 12.9423 4.83337 13.3333 4.83337H33.3333Z"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M5.16659 33.3334V34.3856C4.95669 34.0874 4.83325 33.7244 4.83325 33.3334V14.8334H5.16659V33.3334ZM6.66659 35.1667C6.27558 35.1667 5.91253 35.0433 5.61439 34.8334H6.66659H25.1666V35.1667H6.66659Z"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M18.9393 21.0607L19.712 21.8334H17.8028L18.5665 20.6878L18.9393 21.0607ZM28.8639 21.8334H20.5L21.2 20.9L24.9279 15.9295L28.8639 21.8334Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </Icon>
          <Text
            as="h3"
            fontSize="20px"
            fontWeight="bold"
            letterSpacing="0.02em"
            mb="12px"
          >
            Pacotes a Partir de R$79,90
          </Text>
          <Text color="gray.500">
            Além de vários modelos de cartões prontos. Escolha o que mais gostar
            e inserira suas informações.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
