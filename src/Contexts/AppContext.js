import { createContext } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = createContext({ isAuthenticated: false });

export default AppContext;

// Client Auth
export const auth = (ctx) => {
  const { token } = nextCookie(ctx);

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, {
        Location: `/login/?redirected=true&url=${ctx.query.url}`
      });
      ctx.res.end();
    } else {
      Router.push(`/login/?redirected=true&url=${ctx.query.url}`);
    }
  }

  return token;
};
