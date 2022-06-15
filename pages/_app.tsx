import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ToastContextProvider } from '../components/Toast/ToastProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '../components/Loader/Loader';
import MainLayout from '../components/MainLayout/MainLayout';
import Header from '../components/Header/Header';

function MyApp({Component, pageProps}: AppProps) {
  const [loading, setLoading] = useState(false);
  const {events} = useRouter()

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    events.on("routeChangeStart", start);
    events.on("routeChangeComplete", end);
    events.on("routeChangeError", end);
    return () => {
      events.off("routeChangeStart", start);
      events.off("routeChangeComplete", end);
      events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ToastContextProvider>
      {loading
        ? <MainLayout>
          <Header/>
          <Loader/>
        </MainLayout>
        : <Component {...pageProps} />}
    </ToastContextProvider>
  )
}

export default MyApp;
