import NextLink from 'next/link';
import NextImage from 'next/image';
import Router from 'next/router';
import { Flex, Icon } from '@chakra-ui/react';

import SaveCardHeader from '../SaveCardHeader';

import * as S from './styled';

export default function Header({ editorStore, user }) {
  const { removeElement, handleUndo } = editorStore;

  return (
    <Flex
      as="header"
      py="1rem"
      justifyContent="space-between"
      alignItems="center"
      mb="28px"
    >
      <Flex>
        <NextLink href="/">
          <a>
            <NextImage
              src="/static/logo-black.png"
              alt="Logo Hola Cartão Black"
              width={90}
              height={51.28}
              loading="eager"
              quality="100"
            />
          </a>
        </NextLink>
        <S.ActionButton
          type="button"
          title="Sair do Editor"
          onClick={() => Router.back()}
          marginLeft="88px"
        >
          <Icon viewBox="0 0 26 16" w={7} h={7}>
            <path
              d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM26 9H1V7h25v2z"
              fill="currentColor"
            />
          </Icon>
          sair
        </S.ActionButton>
        <S.ActionButton marginLeft="5rem" onClick={handleUndo}>
          <Icon viewBox="0 0 27 27" w={7} h={7}>
            <path
              d="M13 17.333c1.81 0 3.25-1.442 3.25-3.25s-1.44-3.25-3.25-3.25a3.232 3.232 0 00-3.25 3.25c0 1.808 1.44 3.25 3.25 3.25z"
              fill="currentColor"
            />
            <path
              d="M22.552 12.118a9.686 9.686 0 00-.569-1.828 9.7 9.7 0 00-2.089-3.098 9.799 9.799 0 00-1.443-1.194 9.696 9.696 0 00-3.487-1.468 9.78 9.78 0 00-1.991-.194v-2.17l-4.306 3.25 4.306 3.25V6.503a7.588 7.588 0 011.554.152 7.542 7.542 0 012.711 1.14 7.586 7.586 0 012.05 2.05 7.554 7.554 0 011.295 4.24 7.62 7.62 0 01-.595 2.951c-.19.448-.425.881-.698 1.288a7.796 7.796 0 01-.93 1.125 7.61 7.61 0 01-3.83 2.066 7.724 7.724 0 01-3.057 0 7.534 7.534 0 01-2.712-1.142 7.592 7.592 0 01-2.048-2.047 7.582 7.582 0 01-1.141-2.71 7.598 7.598 0 01-.155-1.532H3.25c0 .662.067 1.323.198 1.966a9.77 9.77 0 001.47 3.488 9.854 9.854 0 002.63 2.63A9.69 9.69 0 0013 23.833c.662 0 1.323-.067 1.965-.198a9.765 9.765 0 003.486-1.468 9.625 9.625 0 001.442-1.19 9.999 9.999 0 001.192-1.443 9.697 9.697 0 001.665-5.45c0-.662-.067-1.323-.198-1.966z"
              fill="currentColor"
            />
          </Icon>
          desfazer
        </S.ActionButton>
        <S.ActionButton marginLeft="3rem" onClick={removeElement}>
          <Icon viewBox="0 0 27 27" w={7} h={7}>
            <path
              d="M6.5 7.583H5.417v14.084c0 1.196.97 2.166 2.166 2.166h10.834c1.196 0 2.166-.97 2.166-2.166V7.583H6.5zm4.333 13H8.667v-9.75h2.166v9.75zm6.5 0h-2.166v-9.75h2.166v9.75zm.67-16.25L16.25 2.167h-6.5L7.997 4.333H3.25V6.5h19.5V4.333h-4.747z"
              fill="currentColor"
            />
          </Icon>
          excluir
        </S.ActionButton>
      </Flex>
      {user && <SaveCardHeader />}
    </Flex>
  );
}
