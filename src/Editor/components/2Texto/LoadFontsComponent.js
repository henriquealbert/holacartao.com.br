import Head from 'next/head';

export default function LoadFontsComponent({ title }) {
  return (
    <Head>
      <title>{title}</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Anton&family=Barlow+Condensed&family=Bebas+Neue&family=Dancing+Script&family=Fjalla+One&family=Lobster&family=Lora&family=MuseoModerno:wght@100&family=Open+Sans+Condensed:wght@300&family=Overpass&family=Pacifico&family=Playfair+Display&family=Public+Sans&family=Raleway&family=Roboto+Slab&family=Teko&family=Titillium+Web&family=Work+Sans&family=Yanone+Kaffeesatz&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
