//Auth
import AppContext from '../Contexts/AppContext';
import AdminContext from '../Contexts/AdminContext';
import useAuth from '../hooks/useAuth';

// Editor
import { EditorUtilsProvider } from '../Editor/Context/EditorUtilsContext';
import { EditorProviderFrente } from '../Editor/Frente/Store';
import { EditorProviderVerso } from '../Editor/Verso/Store';

// styles
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  const { admin, setAdmin, user, setUser } = useAuth();

  return (
    <AdminContext.Provider value={{ admin, isAdminAuth: !!admin, setAdmin }}>
      <AppContext.Provider value={{ user, isAuthenticated: !!user, setUser }}>
        <EditorUtilsProvider>
          <EditorProviderFrente>
            <EditorProviderVerso>
              <GlobalStyles />
              <Component {...pageProps} />
            </EditorProviderVerso>
          </EditorProviderFrente>
        </EditorUtilsProvider>
      </AppContext.Provider>
    </AdminContext.Provider>
  );
}
