/* eslint-disable no-undef */
import Layout from '../components/Layout';
import Payment from '../components/Payment';
import Head from 'next/head';

export default function Pagamento() {
  return (
    <>
      <Head>
        <title>Finalize e Imprima o seu Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        {/* Inputs de informações do cliente -> enviar via api POST */}
        <div>
          <Payment />
          {/*
          <section>
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
                  onChange={guessPaymentMethod}
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
                <select
                  id="issuer"
                  name="issuer"
                  data-checkout="issuer"
                ></select>
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
                  name="paymentMethodId"
                  id="paymentMethodId"
                />
                <button type="submit">Pagar</button>
              </div>
            </div>
          </section>
           */}
        </div>
      </Layout>
    </>
  );
}
