export default function GAdsPurchase() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-451436940/lT3fCJvRxfABEIzDodcB',
              'transaction_id': ''
            });
          `
        }}
      />
    </>
  );
}
