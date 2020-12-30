import { NextSeo } from 'next-seo';
import { auth } from '@/Contexts/AppContext';
// Components
import Layout from '@/components/Layout';
import MyAccOrdersID from '@/components/MyAccOrdersID';
import MyAccLayout from '@/components/MyAccLayout';
import serverClient from '@/graphql/serverClient';
import GET_ORDER from '@/graphql/queries/GetOrder';

export default function MinhaContaPedidosID({ data, id }) {
  return (
    <>
      <NextSeo
        noindex={true}
        title={`Pedido #${id} - Meus Pedidos - Hola Cartão`}
      />

      <Layout>
        <MyAccLayout>
          <MyAccOrdersID data={data} />
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

  const { id } = ctx.query;
  const orderID = id.replace(/2020/i, '');

  const data = await serverClient(token).request(GET_ORDER, {
    id: orderID
  });

  return {
    props: { data, id } // will be passed to the page component as props
  };
}
