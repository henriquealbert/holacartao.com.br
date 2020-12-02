import * as S from './styled';
import Link from 'next/link';
import { useFetch } from '@/hooks/useFetch';
import GET_ME from '@/graphql/queries/GetMe';
import GET_OBRIGADO from '@/graphql/queries/GetObrigado';

export default function ThankYou({ initialData }) {
  // Get User ID
  const { data: user, error: userError } = useFetch(GET_ME, {
    initialData: initialData.user
  });
  const userID = user !== undefined ? user.me.id : -1;
  // Get Order Data passing the User Id to the query
  const { data, error } = useFetch(
    () => GET_OBRIGADO,
    {
      id: userID
    },
    { initialData: initialData.data }
  );

  if (error || userError || user?.error || data?.error) {
    return (
      <S.ThankYouWrapper>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.ThankYouWrapper>
    );
  }

  if (data !== null) {
    return (
      <S.ThankYouWrapper>
        <h1>
          Pedido <u>#2020{data?.user.orders[0].id}</u> realizado!
        </h1>
        <S.ThankYouImg>
          <img src="/images/etapas.svg" alt="Etapas" />
        </S.ThankYouImg>
        <span>✉️</span>
        <p>
          Acompanhe seu e-mail para verificar{' '}
          <strong>dados do pedido, andamento da sua compra</strong> e a previsão
          de <strong>entrega.</strong>
        </p>
        <br />
        <p>
          Ou acesse sua conta{' '}
          <Link href="/minha-conta">
            <a>clicando aqui</a>
          </Link>
          .
        </p>
        <span>👽</span>
        <p>Vamos manter contato?</p>
        <p>Siga-nos no instagram!</p>
        <button>
          <a
            href="https://instagram.com/holacartao"
            target="_blank"
            rel="noopener noreferrer"
          >
            @holacartao
          </a>
        </button>
      </S.ThankYouWrapper>
    );
  }
  return (
    <S.ThankYouWrapper>
      <div>
        <p>Carregando...</p>
      </div>
    </S.ThankYouWrapper>
  );
}
