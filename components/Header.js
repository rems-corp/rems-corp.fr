import Image from 'next/image';
import { HiChevronDown } from 'react-icons/hi2';
import { useState } from 'react';

const Header = ({ changeLocale }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => { setDropdownVisible(true); };
  
  const clickFlag = (lang) => {
    setDropdownVisible(false);
  };

  return (
    <header className="absolute z-30 w-full">
      <h1 className="h1 text-3xl xl:pl-12 xl:pt-6 pt-3 pl-4">REM'S CORP<span className="text-accent">.</span></h1>
      <div className='flex justify-end items-center xl:mr-6 mr-2 -mt-16' onClick={handleMouseEnter} onMouseEnter={handleMouseEnter}>
        <Image className='' alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" width={45} height={15}/>
        <HiChevronDown className="text-2xl text-white xl:ml-3 ml-2"/>
        {isDropdownVisible && (
          <ul className='absolute mt-28 bg-primary p-2'>
            <li onClick={() => clickFlag('en')} className='flex justify-start hover:text-accent'><Image src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" width={20} height={10} className='mr-2'></Image> English</li>
            <li onClick={() => clickFlag('fr')} className='flex justify-start hover:text-accent'><Image src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" width={20} height={10} className='mr-2'></Image> Français</li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
