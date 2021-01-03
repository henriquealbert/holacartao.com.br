const title = 'Crie Cartão de Visita Online e Receba em Casa | Frete Grátis';
const description =
  'Pronto em minutos! Sem contato com gráficas, Sem contratar um designer, Sem sair de casa. Pacotes à partir de R$79,90 com FRETE GRÁTIS';

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
        url: 'https://holacartao.com.br/og.jpeg',
        alt: title,
        width: 1200,
        height: 628
      }
    ]
  }
};

export default SEO;
