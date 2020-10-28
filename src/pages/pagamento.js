/* eslint-disable no-undef */
import Layout from '../components/Layout';
import Payment from '../components/Payment';
import useScript from '../hooks/useScript';
import { useState } from 'react';
import Head from 'next/head';

export default function Pagamento() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // const status = useScript(
  //   'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
  // );
  // // 1. Usar MercadoPago
  // // 2. Campos de informações do cliente como: Nome, CPF, Endereço, etc...
  // // 3. onClick no botão para PAGAR -> fazer chamada para minha api: http://localhost:1337/orders/payment e enviar os dados dos inputs através da chamada POST.
  // // 4. Fazer um loading enquanto aguarda receber o global.id do backend
  // // 5. abrir modal do mercadopago usando o global.id

  // if (status === 'ready') {
  //   console.log('oi');
  // }

  return (
    <>
      <Head>
        <title>Finalize e Imprima o seu Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        <Payment />
        {/* Inputs de informações do cliente -> enviar via api POST */}
      </Layout>
    </>
  );
}
