import { Box, Img, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Router from 'next/router';

export default function SingleModel({ model, cancelClick, onOpen }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const onClick = () => {
    if (cancelClick) {
      onOpen();
      return;
    }
    Router.push({
      pathname: `/editor/${model.slug}`,
      query: {
        url: `/editor/${model.slug}`,
        card: model.id
      }
    });
  };

  return (
    <Box key={model.id} mb="24px" onClick={onClick} cursor="pointer">
      <a>
        <Wrapper>
          <Box className="show-overlay">
            <Text textDecoration="underline">Editar Modelo</Text>
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
      rgba(17, 17, 15, 1) 0%,
      rgba(255, 255, 255, 0.47) 100%
    );
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.01em;
    visibility: hidden;
    transition: all 200ms ease-in-out;
  }
`;
