import { useEffect } from 'react';
import nextCookie from 'next-cookies';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        noindex={true}
        title="Finalize sua Compra e Imprima o seu Cartão - Hola Cartão"
      />

      <Layout>
        <Payment />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { token } = nextCookie(ctx);

  if (!token) {
    return {
      props: {}
    };
  }

  return {
    props: {} // will be passed to the page component as props
  };
}
