import {Sora} from 'next/font/google';

const sora = Sora({
  subsets: ['latin-ext'],
  variable: '--font-sora',
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

import Nav from './Nav';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Work from './Work';
import Testimonials from './Testimonials';

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}>
      <Header />
      <Nav />
      {children}
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
};


export default Layout;
