import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ToastContextProvider } from '../components/Toast/ToastProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastContextProvider>
      <Component {...pageProps} />
    </ToastContextProvider>
    )
}

export default MyApp;
