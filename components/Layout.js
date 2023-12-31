import {Sora} from '@next/font/google'

const sora = Sora({
  subsets: ['latin-ext'],
  variable: '--font-sora',
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

import Nav from '../components/Nav';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat ${sira.variable} font-sora relative'}>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
