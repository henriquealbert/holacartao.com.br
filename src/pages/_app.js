import { useState, useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';

//Auth
import AppContext from '../Contexts/AppContext';
import AdminContext from '../Contexts/AdminContext';
import { useFetch } from '../hooks/useFetch';
import { useFetchAdmin } from '../hooks/useFetchAdmin';
import GET_ME from '../graphql/queries/GetMe';
// Editor
import { EditorUtilsProvider } from '../Editor/Context/EditorUtilsContext';
import { EditorProviderFrente } from '../Editor/Frente/Store';
import { EditorProviderVerso } from '../Editor/Verso/Store';

// styles
import '../styles/global.css';

export default function App({ Component, pageProps }) {
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

  return (
    <AdminContext.Provider value={{ admin, isAdminAuth: !!admin, setAdmin }}>
      <AppContext.Provider value={{ user, isAuthenticated: !!user, setUser }}>
        <EditorUtilsProvider>
          <EditorProviderFrente>
            <EditorProviderVerso>
              <Component {...pageProps} />
            </EditorProviderVerso>
          </EditorProviderFrente>
        </EditorUtilsProvider>
      </AppContext.Provider>
    </AdminContext.Provider>
  );
}
