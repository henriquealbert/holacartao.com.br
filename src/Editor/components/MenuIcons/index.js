import { Flex, Icon } from '@chakra-ui/react';
import * as S from './styled';

export default function MenuIcons({ setOpenMenu, openMenu }) {
  const handleClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu('');
      return;
    }
    setOpenMenu(menuName);
  };

  return (
    <Flex direction="column" zIndex={2}>
      <S.ButtonItem
        marginBottom="1.75rem"
        onClick={() => handleClick('cor')}
        active={openMenu === 'cor' ? true : false}
      >
        <Icon viewBox="0 0 50 50" w={12} h={12}>
          <path
            d="M41.667 29.167c-.192.133-4.167 4.34-4.167 7.291 0 3.113 1.977 5.1 4.167 5.209 1.887.091 4.167-1.857 4.167-5.209 0-3.125-3.975-7.158-4.167-7.291zm-21.696 12.5a4.138 4.138 0 002.946 1.22 4.138 4.138 0 002.946-1.22l14.583-14.584-1.473-1.473L22.917 9.554 18.14 4.777l-2.946 2.946 4.777 4.777L8.334 24.137a4.138 4.138 0 00-1.221 2.946c0 1.113.433 2.159 1.22 2.946l11.638 11.638zm2.946-26.221l11.637 11.637H11.28l11.638-11.637z"
            fill="currentColor"
          />
        </Icon>
        <p>Cor</p>
      </S.ButtonItem>
      <S.ButtonItem
        marginBottom="1.75rem"
        onClick={() => handleClick('texto')}
        active={openMenu === 'texto' ? true : false}
      >
        <Icon viewBox="0 0 50 50" w={12} h={12}>
          <path
            d="M22.5 8.333L10 41.667h4.452l3.906-10.417h13.257l3.906 10.417h4.452l-12.5-33.334H22.5zm-2.581 18.75l5.066-13.51 5.067 13.51H19.92z"
            fill="currentColor"
          />
        </Icon>
        <p>Texto</p>
      </S.ButtonItem>
      <S.ButtonItem
        marginBottom="1.75rem"
        onClick={() => handleClick('elementos')}
        active={openMenu === 'elementos' ? true : false}
      >
        <Icon viewBox="0 0 50 50" w={12} h={12}>
          <path
            d="M37.223 5.217c-.74-1.3-2.877-1.298-3.617 0L25.275 19.8a2.082 2.082 0 001.808 3.117H43.75a2.082 2.082 0 001.808-3.117L37.223 5.217zM6.25 45.833h14.583a2.081 2.081 0 002.084-2.083V29.167a2.081 2.081 0 00-2.084-2.084H6.25a2.081 2.081 0 00-2.083 2.084V43.75c0 1.152.93 2.083 2.083 2.083zm30.208-18.75c-5.169 0-9.375 4.207-9.375 9.375 0 5.17 4.206 9.375 9.375 9.375s9.375-4.206 9.375-9.375c0-5.168-4.206-9.375-9.375-9.375z"
            fill="currentColor"
          />
        </Icon>
        <p>Elementos</p>
      </S.ButtonItem>
      <S.ButtonItem
        marginBottom="1.75rem"
        onClick={() => handleClick('imagem')}
        active={openMenu === 'imagem' ? true : false}
      >
        <Icon viewBox="0 0 50 50" w={12} h={12}>
          <path
            d="M18.75 27.083L25 18.75l6.25 9.375V25h8.333V10.417a4.17 4.17 0 00-4.166-4.167H8.332a4.17 4.17 0 00-4.167 4.167v25a4.17 4.17 0 004.167 4.166H25V31.25H10.416l6.25-8.333 2.084 4.166zM39.583 29.167h-4.166v6.25h-6.25v4.166h6.25v6.25h4.166v-6.25h6.25v-4.166h-6.25v-6.25z"
            fill="currentColor"
          />
        </Icon>
        <p>Imagem</p>
      </S.ButtonItem>
      <S.ButtonItem
        onClick={() => handleClick('fundo')}
        active={openMenu === 'fundo' ? true : false}
      >
        <Icon viewBox="0 0 50 50" w={12} h={12}>
          <path
            d="M43.75 4.167H6.25A2.083 2.083 0 004.167 6.25v37.5c0 1.15.93 2.083 2.083 2.083h37.5a2.083 2.083 0 002.083-2.083V6.25c0-1.15-.931-2.083-2.083-2.083zm-2.084 12.5h-8.333V25h8.334v8.333h-8.334v8.334H25v-8.334h-8.334v8.334H8.333v-8.334h8.333V25H8.333v-8.333h8.333V8.333H25v8.334h8.333V8.333h8.334v8.334z"
            fill="currentColor"
          />
          <path
            d="M16.666 16.667H25V25h-8.334v-8.333zM25 25h8.333v8.333H25V25z"
            fill="currentColor"
          />
        </Icon>
        <p>Fundo</p>
      </S.ButtonItem>
    </Flex>
  );
}
