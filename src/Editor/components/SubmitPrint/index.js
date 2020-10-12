import { useState } from 'react';
import { nanoid } from 'nanoid';
import Router from 'next/router';

import client from '../../../graphql/client';
import { useAppContext } from '../../../Contexts/AppContext';
import MUTATION_CREATE_NEW_ORDER from '../../../graphql/mutations/createNewOrder';
import MUTATION_CREATE_SAVED_CARD from '../../../graphql/mutations/createSavedCard';
import { useEditorStoreFrente } from '../../Frente/Store';
import { useEditorStoreVerso } from '../../Verso/Store';

import * as S from './styled';

export default function SubmitPrint() {
  // 4. gera e salvar imagens frente e verso cartao no tamanho correto para impressão ((FAZER))
  // 5. redireciona para página de pagamento ((FEITO X))

  const [loading, setLoading] = useState(false);

  const { user } = useAppContext();
  const { store: frenteStore } = useEditorStoreFrente();
  const { store: versoStore } = useEditorStoreVerso();

  const handleClick = async () => {
    setLoading(true);
    const query = Router.query;

    // se o user já tiver um cartão salvo
    if (query.saved_card) {
      const newOrder = await client.request(MUTATION_CREATE_NEW_ORDER, {
        input: {
          data: {
            user: user.id,
            saved_card: query.card
          }
        }
      });

      if (newOrder) {
        setLoading(false);
        Router.push('/pagamento/');
      }
    }

    // se o user não tiver um cartão salvo, cria um novo
    if (!query.saved_card) {
      const newSavedCard = await client.request(MUTATION_CREATE_SAVED_CARD, {
        input: {
          data: {
            title: `${Date.now()}`,
            front_card: JSON.stringify(frenteStore),
            back_card: JSON.stringify(versoStore),
            slug: String(nanoid()),
            user: user.id
          }
        }
      });

      const newOrder = await client.request(MUTATION_CREATE_NEW_ORDER, {
        input: {
          data: {
            user: user.id,
            saved_card: newSavedCard.createSavedCard.savedCard.id
          }
        }
      });

      if (newOrder) {
        setLoading(false);
        Router.push('/pagamento/');
      }
    }
  };
  return (
    <S.Button onClick={handleClick} disabled={loading}>
      {loading ? 'Carregando...' : 'Tudo certo, imprimir!'}
    </S.Button>
  );
}
