import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useAppContext } from '@/Contexts/AppContext';
import { logout } from '@/lib/auth';

import * as S from './styled';
import { Button } from '@chakra-ui/react';

export default function Menu({ home }) {
  const { setUser, isAuthenticated } = useAppContext();
  //Responsive Menu
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  // Get the current page
  const { pathname } = useRouter();

  return (
    <S.MenuContainer>
      <button onClick={handleOpen}>
        {!openMenu ? (
          <HamburgerIcon w={10} h={10} color={home ? 'white' : 'black'} />
        ) : (
          <CloseIcon w={10} h={10} color={home ? 'white' : 'black'} />
        )}
      </button>
      <S.MenuWrapper className={!openMenu ? '' : 'open'} home={home}>
        <nav>
          <ul>
            <S.Links home={home}>
              <Link href="/modelos">
                <a className={pathname === '/modelos' ? 'active' : ''}>
                  Modelos
                </a>
              </Link>
            </S.Links>
            <S.Links home={home}>
              <Link href="/ajuda">
                <a className={pathname === '/ajuda' ? 'active' : ''}>Ajuda</a>
              </Link>
            </S.Links>
            {isAuthenticated ? (
              <S.Links home={home}>
                <Link href="/minha-conta">
                  <a
                    className={pathname.includes('minha-conta') ? 'active' : ''}
                  >
                    Minha Conta
                  </a>
                </Link>
              </S.Links>
            ) : (
              <S.Links home={home}>
                <Link href="/criar-conta">
                  <a className={pathname === '/criar-conta' ? 'active' : ''}>
                    Criar Conta
                  </a>
                </Link>
              </S.Links>
            )}
            {isAuthenticated ? (
              <S.Links home={home}>
                <S.LogoutMenuA
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Sair
                </S.LogoutMenuA>
              </S.Links>
            ) : (
              <S.Links btn={home ? true : false}>
                <Link href="/login">
                  <Button
                    as="a"
                    variant="outline"
                    cursor="pointer"
                    w="118px"
                    h="40px"
                    fontSize="14px"
                    borderColor={home ? '' : 'black'}
                  >
                    Entrar
                  </Button>
                </Link>
              </S.Links>
            )}
          </ul>
        </nav>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
}
