import { Box, Img } from '@chakra-ui/react';
import Link from 'next/link';

export default function SingleModel({ model }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
          <Box>
            <Img
              alt={model.title}
              title={model.title}
              src={API_URL + model.example_image.url}
              maxW={{ base: '100%', md: '450px' }}
            />
          </Box>
        </a>
      </Link>
    </Box>
  );
}
