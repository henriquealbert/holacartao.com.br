import { NextSeo } from 'next-seo';
import Head from 'next/head';
import GAdsLead from '@/utils/GoogleAdsConversion/GAdsLead';

import { auth } from '@/Contexts/AppContext';
import Layout from '@/components/Layout';
import MyAcc from '@/components/MyAcc';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaConta() {
  return (
    <>
      <NextSeo noindex={true} title="Minha Conta - Hola Cartão" />
      <Head>
        <GAdsLead />
      </Head>

      <Layout>
        <MyAccLayout>
          <MyAcc />
        </MyAccLayout>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = auth(ctx);

  if (!token) {
    return {
      props: {}
    };
  }

  return {
    props: {} // will be passed to the page component as props
  };
}
