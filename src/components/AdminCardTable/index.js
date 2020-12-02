import Link from 'next/link';
import { useFetchAdmin } from '@/hooks/useFetchAdmin';
import GET_ALL_CARD_MODELS from '@/graphql/admin/GetAllCardModels';
import { formatDateHour } from '@/utils/format';
import AddCardModel from './AddCardModel';
import DeleteCardModel from './DeleteCardModel';

import * as S from './styled';

export default function AdminCardTable() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const { data, error } = useFetchAdmin(GET_ALL_CARD_MODELS, null, {
    revalidateOnMount: true
  });
  const cardModels = data?.cardModels;

  if (error) {
    return (
      <S.AdminCardTableWrapper>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.AdminCardTableWrapper>
    );
  }

  return (
    <S.AdminCardTableWrapper>
      <h1>Modelos de Cartão</h1>
      <S.TableCards>
        <AddCardModel />

        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Modelo</th>
              <th>Categoria</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cardModels
              ?.map((card) => {
                return (
                  <tr key={card.id}>
                    <td>
                      <img src={`${API_URL}${card.example_image?.url}`} />
                    </td>
                    <td>{card.title}</td>

                    <td>{card.card_category.title}</td>
                    <td>{formatDateHour(card.created_at)}</td>
                    <td>{formatDateHour(card.updated_at)}</td>
                    <td>
                      <Link
                        href="/admin/card-models/edit/[id]"
                        as={`/admin/card-models/edit/${card.slug}_${card.id}`}
                      >
                        <a>
                          <S.EditIcon />
                        </a>
                      </Link>
                      <DeleteCardModel id={card.id} />
                    </td>
                  </tr>
                );
              })
              .reverse()}
          </tbody>
        </table>
      </S.TableCards>
    </S.AdminCardTableWrapper>
  );
}
