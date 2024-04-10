import { HiArrowRight } from "react-icons/hi2";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";


const QuoteBtn = () => {  
  return (
    <div className="mx-auto xl:mx-0">
      {/* <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image src={'/rounded-text.png'} width={141} height={148} alt="" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link> */}

      <Link href={"#contact"} className="relative w-48 h-16 xl:m-0 md:mt-11 flex justify-center items-center group border-white border-solid border-2 hover:bg-white hover:text-black transition-all duration-300">
        Demander un devis
      </Link>
    </div>
  );
};

export default QuoteBtn;
