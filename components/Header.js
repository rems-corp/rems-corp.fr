const Header = ({ locale, setLocale }) => {
  const toggleLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    
    setLocale(newLocale);
  };

  return (
    <header className="absolute z-30 w-full">
      <h1 className="h1 text-3xl xl:pl-12 xl:pt-6 pt-3 pl-4">REM&apos;S CORP<span className="text-accent">.</span></h1>

      <button onClick={toggleLocale} className='absolute top-6 right-6 bg-primary p-2 rounded-lg text-white z-100'>
        {locale === "fr" ? "Switch to English" : "Passer en Français"}
      </button>
      
    </header>
  );
};

export default Header;