import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';

import French from '../lang/fr.json';
import English from '../lang/en.json';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userLocale = navigator.language === "fr" ? "fr" : "en";
      setLocale(userLocale);
    }
  }, []);

  const messages = locale === "fr" ? French : English;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Layout locale={locale} setLocale={setLocale}>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </IntlProvider>
  );
}

export default App;
