import GAdsPageViewHome from '@/utils/GoogleAdsConversion/GAdsPageViewHome';
import Head from 'next/head';

import Layout from '@/components/Layout';
import HomeHero from '@/components/HomeHero';
import HomeDescription from '@/components/HomeDescription';
import HomeBenefits from '@/components/HomeBenefits';
import HomeFeatures from '@/components/HomeFeatures';
import HomePrices from '@/components/HomePrices';
import HomeLast from '@/components/HomeLast';

export default function Index() {
  return (
    <>
      <Head>
        <GAdsPageViewHome />
      </Head>

      <Layout home>
        <HomeHero />
        <HomeDescription />
        <HomeBenefits />
        <HomeFeatures />
        <HomePrices />
        <HomeLast />
      </Layout>
    </>
  );
}
