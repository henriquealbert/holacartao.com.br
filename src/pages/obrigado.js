// Components
import Layout from '@/components/Layout';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import ThankYou from '@/components/ThankYou';

function Obrigado() {
  return (
    <>
      <Head>
        <title>Obrigado! - Hola Cartão</title>
      </Head>
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
