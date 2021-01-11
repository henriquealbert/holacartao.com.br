export default function GoogleAds() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-451436940"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-451436940');
          `
        }}
      />
    </>
  );
}
