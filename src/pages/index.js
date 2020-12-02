import Head from 'next/head';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BannerFrete from '@/components/BannerFrete';
import Pagseguro from '@/components/Pagseguro';
import BannerBenefits from '@/components/BannerBenefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';

export default function Index() {
  return (
    <>
      <Head>
        <title>Início - Hola Cartão</title>
      </Head>
      <Layout>
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
