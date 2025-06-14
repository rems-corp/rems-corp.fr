const Header = ({ locale, setLocale, isMobile }) => {
  const toggleLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    
    setLocale(newLocale);
  };

  return (
    <header className="absolute z-30 w-full">
      <h1 className="h1 text-3xl xl:pl-12 xl:pt-6 pt-3 pl-4">REM&apos;S CORP<span className="text-accent">.</span></h1>

      {!isMobile && <button onClick={toggleLocale} className='fixed top-6 right-6 bg-primary p-2 rounded-lg text-white z-50'>
        {locale === "fr" ? "Switch to English" : "Passer en Français"}
      </button>}

      {isMobile && <button onClick={toggleLocale} className='fixed top-2 right-2 bg-primary p-2 rounded-lg text-white z-50'>
        {locale === "fr" ? "EN" : "FR"}
      </button>}
      
    </header>
  );
};

export default Header;