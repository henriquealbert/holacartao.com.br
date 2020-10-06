// Utils
import Link from 'next/link';
import { formatDate, formatDateHour } from '../../utils/format';

// API
import { useFetch } from '../../hooks/useFetch';
import GET_ME from '../../graphql/queries/GetMe';
import GET_SAVED_CARDS from '../../graphql/queries/GetSavedCards';

// Styles
import * as S from './styled';

export default function MyAccSavedCards({ initialData }) {
  // Get User ID
  const { data: user, error } = useFetch(GET_ME, null, {
    initialData: initialData.user
  });

  // Get Order Data passing the User Id to the query
  const { data: savedCards, error: savedCardsErrors } = useFetch(
    () => GET_SAVED_CARDS,
    {
      id: user.me.id
    },
    { initialData: initialData.savedCards }
  );

  if (error || savedCardsErrors || user?.error || savedCards?.error) {
    return (
      <S.MyAccSavedCards>
        <h2>Meus Cartões Salvos</h2>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.MyAccSavedCards>
    );
  }

  if (savedCards) {
    const saved_cards = savedCards?.user?.saved_cards;
    return (
      <S.MyAccSavedCards>
        <h2>Meus Cartões Salvos</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Criado</th>
              <th>Atualizado</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {saved_cards?.map((card) => {
              return (
                <tr key={card.id}>
                  <td>{card.title}</td>
                  <td>{formatDate(card.created_at)}</td>
                  <td>{formatDateHour(card.updated_at)}</td>
                  <td>
                    <Link
                      href={{
                        pathname: `/editor/${card.slug}`,
                        query: {
                          url: `/editor/${card.slug}`,
                          saved_card: true,
                          card: card.id
                        }
                      }}
                    >
                      <a>Abrir no editor</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </S.MyAccSavedCards>
    );
  }

  return (
    <S.MyAccSavedCards>
      <h2>Meus Cartões Salvos</h2>
      <div>
        <p>Carregando...</p>
      </div>
    </S.MyAccSavedCards>
  );
}
