import { Box, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

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
          <Wrapper>
            <Box className="show-overlay">
              <Text>Editar Modelo</Text>
            </Box>
            <Img
              alt={model.title}
              title={model.title}
              src={API_URL + model.example_image.url}
              w={{ base: '100%', md: '450px' }}
              h={{ base: 'auto', md: '360px' }}
            />
          </Wrapper>
        </a>
      </Link>
    </Box>
  );
}

const Wrapper = styled.div`
  position: relative;

  &:hover {
    .show-overlay {
      visibility: visible;
      display: flex;
    }
  }

  .show-overlay {
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(17, 17, 15, 0.85) 0%,
      rgba(255, 255, 255, 0.67) 100%
    );
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.01em;
    visibility: hidden;
    transition: all 200ms ease-in-out;
  }
`;
