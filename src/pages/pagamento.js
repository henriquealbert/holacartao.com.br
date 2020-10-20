import Layout from '../components/Layout';
import Payment from '../components/Payment';
import useScript from '../hooks/useScript';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pagamento() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // 1. Usar MercadoPago
  // 2. Campos de informações do cliente como: Nome, CPF, Endereço, etc...
  // 3. onClick no botão para PAGAR -> fazer chamada para minha api: http://localhost:1337/orders/payment e enviar os dados dos inputs através da chamada POST.
  // 4. Fazer um loading enquanto aguarda receber o global.id do backend
  // 5. abrir modal do mercadopago usando o global.id

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.post(`${API_URL}/orders/payment`);

      const script = document.createElement('script');
      script.src =
        'https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js';
      script.async = true;
      script.setAttribute('data-preference-id', data.id);

      document.getElementById('mercadoForm').appendChild(script);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {/* <Payment /> */}
      {/* Inputs de informações do cliente -> enviar via api POST */}

      <h1>Oi</h1>
      <div id="mercadoForm" />
    </Layout>
  );
}
