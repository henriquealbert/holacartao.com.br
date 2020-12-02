import { createContext } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AdminContext = createContext({ isAdminAuth: false });

export default AdminContext;

// Admin Auth
export const authAdmin = (ctx) => {
  const { adminToken } = nextCookie(ctx);

  // If there's no adminToken, it means the user is not logged in.
  if (!adminToken) {
    if (typeof window === 'undefined') {
      ctx.res.statusCode = 302;
      ctx.res.setHeader('Location', '/admin?redirected=true');
    } else {
      Router.push('/admin?redirected=true');
    }
  }

  return adminToken;
};
