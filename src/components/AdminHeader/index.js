import Link from 'next/link';
import { useContext } from 'react';
import AdminContext from '@/Contexts/AdminContext';
import { adminLogout } from '@/lib/authAdmin';

import * as S from './styled';

export default function AdminHeader() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { setAdmin } = useContext(AdminContext);

  return (
    <S.HeaderWrapper id="top">
      <S.HeaderContainer>
        <div>
          <Link href="/admin/dashboard">
            <a>
              <img src="/images/hola-cartao-black.png" alt="Hola Cartão" />
            </a>
          </Link>
          <S.AdminHeaderMenu>
            <li>
              <Link href="/admin/dashboard">
                <a>Administração dos Pedidos</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/card-models">
                <a>Modelos de Cartão</a>
              </Link>
            </li>
            <li>
              <a href={`${API_URL}/admin`} target="_blank" rel="noreferrer">
                Opções Avançadas <S.LinkExternalIcon />
              </a>
            </li>
          </S.AdminHeaderMenu>
        </div>
        <S.Profile>
          <img src="/images/fulano.png" alt="Fulano" />
          <div>
            <p>Fulano</p>
            <span>At. ao cliente</span>
          </div>
          <S.IconLogout
            title="Logout"
            onClick={() => {
              adminLogout();
              setAdmin(null);
            }}
          />
        </S.Profile>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
