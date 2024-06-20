import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
  
  export const navData = [
    { name: 'home', path: 'home', icon: <HiHome /> },
     { name: 'about', path: 'about', icon: <HiUser /> },
    // { name: 'services', path: 'services', icon: <HiRectangleGroup /> },
    // { name: 'work', path: 'work', icon: <HiViewColumns /> },
    // { name: 'testimonials', path: 'testimonials', icon: <HiChatBubbleBottomCenterText /> },
    { name: 'contact', path: 'contact', icon: <HiEnvelope /> },
  ];
  
  import { useEffect, useState } from 'react';
  
  const Nav = () => {
    const [currentSection, setCurrentSection] = useState('home');
  
    const handleScroll = () => {
      let container = document.querySelector('.page');
      const pos = container.scrollTop;
      const sections = navData.map((link) => link.path);
      let current = '';
  
      sections.forEach((section) => {
        const targetSection = document.getElementById(section);
        if (targetSection.offsetTop <= pos && targetSection.offsetTop + targetSection.offsetHeight > pos) {
          current = section;
        }
      });
      setCurrentSection(current);
    };
  
    useEffect(() => {
      let container = document.querySelector('.page');
      container.addEventListener('scroll', handleScroll, false);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToPage = page => {
      const pageToScroll = document.getElementById(page);
      pageToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  
    return (
      <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-1 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:test-xl xl:rounded-full">
          {navData.map((link, _) => {
            return (
              <a key={link.path} onClick={() => scrollToPage(link.path)} className={`${link.path === currentSection ? 'text-accent' : ''} relative flex items-center group hover:text-accent transition-all duration-300 xl:pb-[17px] xl:last:pb-0`}>
                <div className={`${link.path === currentSection ? 'rounded-full bg-white p-2' : ''} transition-all duration-200`}>{link.icon}</div>
              </a>
            );
          })}
        </div>
      </nav>
    );
  };
  
  export default Nav;