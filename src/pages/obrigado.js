import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import nextCookie from 'next-cookies';
import ThankYou from '@/components/ThankYou';

function Obrigado() {
  return (
    <>
      <NextSeo noindex={true} title="Obrigado! - Hola Cartão" />
      <Layout>
        <ThankYou />
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

export default Obrigado;
