import { useState } from 'react';
import { nanoid } from 'nanoid';
import Router from 'next/router';

import client from '@/graphql/client';
import { useAppContext } from '@/Contexts/AppContext';
import MUTATION_CREATE_NEW_ORDER from '@/graphql/mutations/createNewOrder';
import MUTATION_CREATE_SAVED_CARD from '@/graphql/mutations/createSavedCard';
import { useEditorStoreFrente } from '../../Frente/Store';
import { useEditorStoreVerso } from '../../Verso/Store';

import { Button } from '@chakra-ui/react';

export default function SubmitPrint() {
  const [loading, setLoading] = useState(false);

  const { user } = useAppContext();
  const { store: frenteStore } = useEditorStoreFrente();
  const { store: versoStore } = useEditorStoreVerso();

  const handleClick = async () => {
    setLoading(true);
    const query = Router.query;
    const cartao_frente = JSON.stringify(localStorage.getItem('frenteFinal'));
    const cartao_verso = JSON.stringify(localStorage.getItem('versoFinal'));

    // se o user já tiver um cartão salvo
    if (query.saved_card) {
      const newOrder = await client.request(MUTATION_CREATE_NEW_ORDER, {
        input: {
          data: {
            user: user.id,
            saved_card: query.card,
            cartao_frente: cartao_frente,
            cartao_verso: cartao_verso
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
            saved_card: newSavedCard.createSavedCard.savedCard.id,
            cartao_frente: cartao_frente,
            cartao_verso: cartao_verso
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
    <Button
      variant="primary"
      onClick={handleClick}
      isLoading={loading}
      loadingText="Carregando..."
      size="lg"
      m="0 auto"
    >
      Finalizar
    </Button>
  );
}
