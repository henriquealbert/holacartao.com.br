const title = 'Hola Cartão - Uma solução em cartões de visita.';
const description =
  'Hola Cartão – Crie seu cartão de visita online e receba impresso em casa em até 7 dias com frete grátis!';

const SEO = {
  title,
  description,
  canonical: 'https://holacartao.com.br',
  openGraph: {
    site_name: 'Hola Cartão',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://holacartao.com.br',
    title,
    description,
    images: [
      {
        url: 'https://holacartao.com.br/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
