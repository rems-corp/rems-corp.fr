import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';

import French from '../lang/fr.json';
import English from '../lang/en.json';

function App({ Component, pageProps }) {
  const router = useRouter();

  // const [locale, setLocale] = useState(navigator.language);
  const [locale, setLocale] = useState("en");
  const messages = locale === "fr" ? French : English;

  const changeLocale = (newLocale) => { setLocale(newLocale); };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} changeLocale={changeLocale} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </IntlProvider>
  );
}

export default App;
