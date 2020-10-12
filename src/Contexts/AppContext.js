import { createContext, useContext } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = createContext({ isAuthenticated: false });

export default AppContext;

export const useAppContext = () => useContext(AppContext);

// Client Auth
export const auth = (ctx) => {
  const { token } = nextCookie(ctx);

  const card = ctx.query.card ? `&card=${ctx.query.card}` : '';
  const savedCard = ctx.query.saved_card
    ? `&saved_card=${ctx.query.save_card}`
    : '';

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, {
        Location: `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      });
      ctx.res.end();
    } else {
      Router.push(
        `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      );
    }
  }

  return token;
};
