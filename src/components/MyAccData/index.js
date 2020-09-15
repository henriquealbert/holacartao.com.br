import Link from 'next/link';
import { useFetch } from '../../hooks/useFetch';
import GET_ME from '../../graphql/queries/GetMe';
import GET_USER from '../../graphql/queries/GetUser';

import * as S from './styled';

export default function MyAccData({ initialData }) {
  const { data: user, error } = useFetch(GET_ME, {
    initialData: initialData.user
  });
  const userID = user !== undefined ? user.me.id : -1;

  const { data, error: dataError } = useFetch(
    () => GET_USER,
    {
      id: userID
    },
    { initialData: initialData.data }
  );

  if (error || dataError || user?.error || data?.error) {
    return (
      <S.MyAccData>
        <h2>Dados da Conta</h2>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.MyAccData>
    );
  }

  if (data) {
    return (
      <S.MyAccData>
        <h2>Dados da Conta</h2>
        <div>
          <ul>
            <li>
              <span>Nome de Usuário:</span>
              {data.user.username}
            </li>
            <li>
              <span>Email:</span>
              {data.user.email}
            </li>
            <li>
              <span>Área de atuação:</span>
              {data.user.occupation}
            </li>
            <li>
              <span>Senha:</span>
              ********
            </li>
          </ul>
          <Link href="/minha-conta/dados/edit">
            <S.OutlineBtn>Mudar senha</S.OutlineBtn>
          </Link>
        </div>
      </S.MyAccData>
    );
  }
  return (
    <S.MyAccData>
      <h2>Dados da Conta</h2>
      <div>
        <p>Carregando...</p>
      </div>
    </S.MyAccData>
  );
}
