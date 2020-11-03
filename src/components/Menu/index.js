import { useState, useContext } from 'react';
import AppContext from '../../Contexts/AppContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../../lib/auth';

import * as S from './styled';

export default function Menu() {
  const { setUser, isAuthenticated } = useContext(AppContext);
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
        {!openMenu ? <S.OpenMenu /> : <S.CloseMenu />}
      </button>
      <S.MenuWrapper className={!openMenu ? '' : 'open'}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={pathname === '/' ? 'active' : ''}>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/modelos">
                <a className={pathname === '/modelos' ? 'active' : ''}>
                  Modelos
                </a>
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link href="/minha-conta">
                  <a
                    className={
                      pathname === '/minha-conta'
                        ? 'active'
                        : pathname === '/minha-conta/pedidos'
                        ? 'active'
                        : pathname === '/minha-conta/pedidos/[id]'
                        ? 'active'
                        : pathname === '/minha-conta/dados'
                        ? 'active'
                        : pathname === '/minha-conta/dados/edit'
                        ? 'active'
                        : pathname === '/minha-conta/ajuda'
                        ? 'active'
                        : pathname === '/minha-conta/cartoes-salvos'
                        ? 'active'
                        : null
                    }
                  >
                    Minha Conta
                  </a>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/criar-conta">
                  <a className={pathname === '/criar-conta' ? 'active' : ''}>
                    Criar Conta
                  </a>
                </Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <S.LogoutMenuA
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Sair
                </S.LogoutMenuA>
              </li>
            ) : (
              <li>
                <Link href="/login">
                  <a className={pathname === '/login' ? 'active' : ''}>Login</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/ajuda">
                <a className={pathname === '/ajuda' ? 'active' : ''}>Ajuda</a>
              </Link>
            </li>
          </ul>
        </nav>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
}
