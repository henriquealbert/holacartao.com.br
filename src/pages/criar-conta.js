import Head from 'next/head'

import Layout from '../components/Layout'

import Steps from '../components/Steps'
import FormCreate from '../components/FormCreate'

export default function CriarConta() {
  return (
    <>
      <Head>
        <title>Crie sua Conta - Hola Cartão</title>
      </Head>
      <Layout>
        <Steps />
        <FormCreate />
      </Layout>
    </>
  )
}
