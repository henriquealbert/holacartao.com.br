import { useState, useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { useFetch } from './useFetch';
import { useFetchAdmin } from './useFetchAdmin';
import GET_ME from '@/graphql/queries/GetMe';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  // Get User ID
  const { data: me, error } = useFetch(GET_ME);
  const { data: meAdmin, error: adminError } = useFetchAdmin(GET_ME);

  useEffect(() => {
    // Auth Client
    if (me !== undefined) {
      if (error) {
        Cookie.remove('token');
        setUser(null);
        return null;
      }
      const newUser = me.me;
      setUser(newUser);
    }

    // Auth Admin
    if (meAdmin !== undefined) {
      if (adminError) {
        Cookie.remove('adminToken');
        setAdmin(null);
        return null;
      }
      const newAdmin = meAdmin.me;
      setAdmin(newAdmin);
    }
  }, [error, me, meAdmin, adminError]);

  // Sync logout with all browser tabs
  const syncLogout = (event) => {
    if (event.key === 'logout') {
      Router.push('/login/?redirected=true');
    }
  };
  useEffect(() => {
    window.addEventListener('storage', syncLogout);

    return () => {
      window.removeEventListener('storage', syncLogout);
      window.localStorage.removeItem('logout');
    };
  });

  return { user, setUser, admin, setAdmin };
}
