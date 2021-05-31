module.exports = {
  trailingSlash: true,
  images: {
    domains: ['localhost', 'api.holacartao.com.br']
  },
  async redirects() {
    return [
      {
        source: '/admin/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/editor/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/minha-conta/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/ajuda/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/criar-conta/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/criar-nova-senha/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/esqueceu-senha/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/login/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/modelos/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/obrigado/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/pagamento/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/politica-privacidade/',
        destination: '/coming-soon/',
        permanent: false
      },
      {
        source: '/',
        destination: '/coming-soon/',
        permanent: false
      }
    ];
  }
};
