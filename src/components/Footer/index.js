import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.LinksWrapper>
            <Link href="/ajuda/">
              <a>Central de Ajuda</a>
            </Link>
            <Link href="/politica-privacidade/">
              <a>Política de Privacidade</a>
            </Link>
            <S.Social
              href="https://www.instagram.com/holacartao/"
              target="_blank"
              rel="noreferrer"
            >
              <S.Instagram />
              @holacartao
            </S.Social>
          </S.LinksWrapper>
          <S.EmailWrapper>
            <p>Problemas? Entre em contato pelo:</p>
            <p>meajuda@holacartao.com.br</p>
          </S.EmailWrapper>
        </S.InfoWrapper>
        <S.ImageWrapper>
          <Link href="/">
            <a>
              <Image
                src="/images/logo-footer.png"
                alt="Hola Cartão Logo"
                width={193}
                height={137}
                quality={100}
              />
            </a>
          </Link>
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
