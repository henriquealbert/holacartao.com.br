/* eslint-disable no-undef */
import Layout from '../components/Layout';
import Payment from '../components/Payment';
import useScript from '../hooks/useScript';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Pagamento() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_MERCADOPAGO;

  const returnFalse = () => {
    return false;
  };

  const status = useScript(
    'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
  );

  if (status === 'ready') {
    window.Mercadopago.setPublishableKey(
      'TEST-0aef4aa5-f51b-4399-83dc-6b3a5008926a'
    );
    // Pega tipo de Documento
    window.Mercadopago.getIdentificationTypes();
  }
  function guessPaymentMethod(event) {
    let cardnumber = document.getElementById('cardNumber').value;
    if (cardnumber.length >= 6) {
      let bin = cardnumber.substring(0, 6);

      window.Mercadopago.getPaymentMethod(
        {
          bin: bin
        },
        setPaymentMethod
      );
    }
  }

  function setPaymentMethod(status, response) {
    console.log('erro');
    if (status == 200) {
      let paymentMethod = response[0];

      document.getElementById('paymentMethodId').value = paymentMethod.id;

      // if (paymentMethod.additional_info_needed.includes('issuer_id')) {
      //   getIssuers(paymentMethod.id);
      // } else {
      Mercadopago.getInstallments(
        paymentMethod.id,
        document.getElementById('transactionAmount').value
      );
      // }
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  return (
    <>
      <Head>
        <title>Finalize e Imprima o seu Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        {/* <Payment /> */}
        {/* Inputs de informações do cliente -> enviar via api POST */}
        <form action="/process_payment" method="post" id="paymentForm">
          <div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="text" />
            </div>
            <div>
              <label htmlFor="docType">Tipo de documento</label>
              <select
                id="docType"
                name="docType"
                data-checkout="docType"
                type="text"
              ></select>
            </div>
            <div>
              <label htmlFor="docNumber">Número do documento</label>
              <input
                id="docNumber"
                name="docNumber"
                data-checkout="docNumber"
                type="text"
              />
            </div>
          </div>
          <h3>Detalhes do cartão</h3>
          <div>
            <div>
              <label htmlFor="cardholderName">Titular do cartão</label>
              <input
                id="cardholderName"
                data-checkout="cardholderName"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Data de vencimento</label>
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  id="cardExpirationMonth"
                  data-checkout="cardExpirationMonth"
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  autoComplete="off"
                />
                <span className="date-separator">/</span>
                <input
                  type="text"
                  placeholder="YY"
                  id="cardExpirationYear"
                  data-checkout="cardExpirationYear"
                  onPaste={returnFalse}
                  onCopy={returnFalse}
                  onCut={returnFalse}
                  onDrag={returnFalse}
                  onDrop={returnFalse}
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                data-checkout="cardNumber"
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                autoComplete="off"
                onChange={(event) => guessPaymentMethod(event)}
              />
            </div>
            <div>
              <label htmlFor="securityCode">Código de segurança</label>
              <input
                id="securityCode"
                data-checkout="securityCode"
                type="text"
                onPaste={returnFalse}
                onCopy={returnFalse}
                onCut={returnFalse}
                onDrag={returnFalse}
                onDrop={returnFalse}
                autoComplete="off"
              />
            </div>
            <div id="issuerInput">
              <label htmlFor="issuer">Banco emissor</label>
              <select id="issuer" name="issuer" data-checkout="issuer"></select>
            </div>
            <div>
              <label htmlFor="installments">Parcelas</label>
              <select
                type="text"
                id="installments"
                name="installments"
              ></select>
            </div>
            <div>
              <input
                type="hidden"
                name="transactionAmount"
                id="transactionAmount"
                value="100"
              />
              <input
                type="hidden"
                name="paymentMethodId"
                id="paymentMethodId"
              />
              <input type="hidden" name="description" id="description" />
              <button type="submit">Pagar</button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}
