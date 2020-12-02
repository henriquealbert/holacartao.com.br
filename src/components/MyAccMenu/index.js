import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { logout } from '@/lib/auth';
import AppContext from '@/Contexts/AppContext';

import * as S from './styled';

export default function MyAccMenu() {
  const { setUser } = useContext(AppContext);

  // Get the current page
  const { pathname } = useRouter();

  return (
    <S.MyAccMenu>
      <ul>
        <li>
          <Link href="/minha-conta">
            <a className={pathname === '/minha-conta' ? 'active' : ''}>Conta</a>
          </Link>
        </li>
        <li>
          <Link href="/minha-conta/pedidos">
            <a
              className={
                pathname === '/minha-conta/pedidos'
                  ? 'active'
                  : pathname === '/minha-conta/pedidos/[id]'
                  ? 'active'
                  : ''
              }
            >
              Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/minha-conta/cartoes-salvos">
            <a
              className={
                pathname === '/minha-conta/cartoes-salvos' ? 'active' : ''
              }
            >
              Cartões Salvos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/minha-conta/dados">
            <a
              className={
                pathname === '/minha-conta/dados'
                  ? 'active'
                  : pathname === '/minha-conta/dados/edit'
                  ? 'active'
                  : ''
              }
            >
              Dados
            </a>
          </Link>
        </li>
        <li>
          <Link href="/minha-conta/ajuda">
            <a className={pathname === '/minha-conta/ajuda' ? 'active' : ''}>
              Ajuda
            </a>
          </Link>
        </li>
        <li>
          <a
            onClick={() => {
              logout();
              setUser(null);
            }}
          >
            Sair
          </a>
        </li>
      </ul>
    </S.MyAccMenu>
  );
}
