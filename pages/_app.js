import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ 
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
 }) {
  return <CacheProvider value={emotionCache}>
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Component {...pageProps} />
    </SnackbarProvider>
  </CacheProvider>
}

export default MyApp
