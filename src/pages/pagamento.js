import Layout from '../components/Layout';
import Payment from '../components/Payment';

export default function Pagamento() {
  // 1. Usar MercadoPago
  // 2. Campos de informações do cliente como: Nome, CPF, Endereço, etc...
  // 3. onClick no botão para PAGAR -> fazer chamada para minha api: http://localhost:1337/orders/payment e enviar os dados dos inputs através da chamada POST.
  // 4. Fazer um loading enquanto aguarda receber o global.id do backend
  // 5. abrir modal do mercadopago usando o global.id

  const global = { global: { id: 1 } };

  return (
    <Layout>
      {/* <Payment /> */}
      {/* Inputs de informações do cliente -> enviar via api POST */}
      <form method="POST">
        <script
          src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
          data-preference-id="2346"
        ></script>
        <button type="submit">Pagar</button>
      </form>
    </Layout>
  );
}
