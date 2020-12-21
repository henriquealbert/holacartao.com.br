import { Box, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function SingleModel({ model }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [overlay, setOverlay] = useState(false);

  return (
    <Box key={model.id} mb="24px">
      <Link
        href={{
          pathname: `/editor/${model.slug}`,

          query: {
            url: `/editor/${model.slug}`,
            card: model.id
          }
        }}
      >
        <a>
          <Box maxW={{ base: '100%', md: '450px' }} position="relative">
            <Img
              alt={model.title}
              title={model.title}
              src={API_URL + model.example_image.url}
              width={450}
              height={360}
              onMouseEnter={() => setOverlay(true)}
              onMouseLeave={() => setOverlay(false)}
            />
            <Box
              display={overlay ? 'flex' : 'none'}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="linear-gradient(180deg, rgba(17, 17, 15, 0.85) 0%, rgba(255, 255, 255, 0.67) 100%)"
              w="100%"
              h="100%"
              justifyContent="center"
              alignItems="center"
              transition="all 250ms ease-in-out"
            >
              <Text fontSize="22px">Editar Modelo</Text>
            </Box>
          </Box>
        </a>
      </Link>
    </Box>
  );
}
