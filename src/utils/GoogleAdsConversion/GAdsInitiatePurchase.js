export default function GAdsInitiatePurchase() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-451436940/x_NuCLrDt_ABEIzDodcB'});
          `
        }}
      />
    </>
  );
}
