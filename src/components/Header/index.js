import Link from 'next/link';
import Image from 'next/image';

import Menu from '../Menu';

import { Box, Flex } from '@chakra-ui/react';

export default function Header({ home }) {
  return (
    <Box position={home ? 'absolute' : ''} w="100%" zIndex="2000">
      <Flex
        p="22px 0"
        maxW="1280px"
        m={{ xl: '0 auto', base: '0 1rem' }}
        justifyContent="space-between"
      >
        <Link href="/">
          <a>
            <Image
              src="/images/hola-cartao-black.png"
              alt="Hola Cartão"
              width={87.5}
              height={50}
              loading="eager"
              quality="100"
            />
          </a>
        </Link>
        <Menu home={home} />
      </Flex>
    </Box>
  );
}
