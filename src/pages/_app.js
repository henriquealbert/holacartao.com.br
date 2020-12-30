//Auth
import { AppUserProvider } from '@/Contexts/AppContext';
import AdminContext from '@/Contexts/AdminContext';
import useAuth from '@/hooks/useAuth';

// Editor
import { EditorUtilsProvider } from '@/Editor/Context/EditorUtilsContext';
import { EditorProviderFrente } from '@/Editor/Frente/Store';
import { EditorProviderVerso } from '@/Editor/Verso/Store';

// styles
import { globalStyles } from '@/styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }) {
  const { admin, setAdmin, user, setUser } = useAuth();

  return (
    <ChakraProvider theme={theme}>
      <AdminContext.Provider value={{ admin, isAdminAuth: !!admin, setAdmin }}>
        <AppUserProvider value={{ user, isAuthenticated: !!user, setUser }}>
          <EditorUtilsProvider>
            <EditorProviderFrente>
              <EditorProviderVerso>
                <DefaultSeo {...SEO} />
                {globalStyles}
                <Component {...pageProps} />
              </EditorProviderVerso>
            </EditorProviderFrente>
          </EditorUtilsProvider>
        </AppUserProvider>
      </AdminContext.Provider>
    </ChakraProvider>
  );
}
