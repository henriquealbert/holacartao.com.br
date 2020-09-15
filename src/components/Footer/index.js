import * as S from './styled';
import Link from 'next/link';

export default function Footer() {
  return (
    <S.FooterWrapper>
      <ul>
        <li>
          <Link href="/ajuda">
            <a>Central de Ajuda</a>
          </Link>
        </li>
        <li>
          <Link href="/politica-privacidade">
            <a>Política de Privacidade</a>
          </Link>
        </li>
      </ul>
      <p>Problemas? Entre em contato pelo: hola@cartão.com.br</p>
      <S.Copyright>
        © {new Date().getFullYear()} Hola Cartão – Todos os Direitos Reservados.
      </S.Copyright>
    </S.FooterWrapper>
  );
}
