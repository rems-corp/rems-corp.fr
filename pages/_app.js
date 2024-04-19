import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { IntlProvider } from 'react-intl';

import French from '../lang/fr.json';
import English from '../lang/en.json';

function App({ Component, pageProps }) {
  const router = useRouter();
  const local = navigator.language;
  var lang = English;
  // if (local === 'fr') { lang = French; }

  return (
    <IntlProvider locale={local} messages={lang}>
      <Layout>
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
