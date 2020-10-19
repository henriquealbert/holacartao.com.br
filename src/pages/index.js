import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BannerFrete from '../components/BannerFrete';
import Pagseguro from '../components/Pagseguro';
import BannerBenefits from '../components/BannerBenefits';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';

import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Início - Hola Cartão</title>
      </Head>
      <Layout>
        <Link href="/pagamento/">
          <a>pagamento</a>
        </Link>
        <Hero />
        <BannerFrete />
        <Pagseguro />
        <BannerBenefits />
        <HowItWorks />
        <Pricing />
      </Layout>
    </>
  );
}
