import Link from 'next/link';
import Image from 'next/image';

import Menu from '../Menu';

import * as S from './styled';

export default function Header() {
  return (
    <S.HeaderWrapper id="top">
      <S.HeaderContainer>
        <Link href="/">
          <a>
            <Image
              src="/images/hola-cartao-black.png"
              alt="Hola Cartão"
              width={87.5}
              height={50}
              loading="eager"
              quality="100"
            />
          </a>
        </Link>
        <Menu />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
