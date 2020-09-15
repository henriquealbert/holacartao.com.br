import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';

export default function CreateNewPass() {
  return (
    <>
      <Head>
        <title>Crie sua nova senha - Hola Cartão</title>
      </Head>
      <Layout>
        <h1>Crie sua nova senha</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Router.push('/login');
          }}
        >
          <div>
            <label htmlFor="token">Insira seu token:</label>
            <input name="token" type="text" placeholder="Token" />
          </div>
          <div>
            <label htmlFor="newPass">Digite sua nova senha:</label>
            <input name="newPass" type="text" placeholder="Nova Senha" />
          </div>
          <div>
            <label htmlFor="confirmPass">Confirmar senha:</label>
            <input
              name="confirmPass"
              type="text"
              placeholder="Cofirmar Senha"
            />
          </div>
          <div>
            <button type="submit">Alterar senha</button>
          </div>
        </form>
      </Layout>
    </>
  );
}
