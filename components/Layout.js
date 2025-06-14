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
import Projects from './Projects';
import Testimonials from './Testimonials';
import { useEffect, useState } from 'react';

const Layout = ({ children, locale, setLocale }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (typeof window !== "undefined") {
          setIsMobile(window.innerWidth < 768);
      }
  }, []);

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}>
      <Header locale={locale} setLocale={setLocale}/>
      <Nav />
      {children}
      <About />
      <Projects isMobile={isMobile} /> 
      <Testimonials isMobile={isMobile}/>
      <Contact isMobile={isMobile} />
      {/*<Services  />*/}
    </div>
  );
};


export default Layout;
