import Head from 'next/head';
import { useEffect } from 'react';

import Layout from '@/components/Layout';
import Payment from '@/components/Payment';
import { useAppContext } from '@/Contexts/AppContext';

export default function Pagamento() {
  const { resetCheckoutState } = useAppContext();

  // reset form before initialize
  useEffect(() => {
    resetCheckoutState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Finalize e Imprima o seu Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        <Payment />
      </Layout>
    </>
  );
}
