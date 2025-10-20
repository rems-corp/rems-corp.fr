import { HiArrowRight } from "react-icons/hi2";
import { FormattedMessage } from "react-intl";
import { scrollToPage } from "./nav";

const QuoteBtn = () => {  
  return (
    <div className="mx-auto xl:mx-0">
      <button
        onClick={() => scrollToPage("contact")}
        className="relative w-48 h-16 xl:m-0 md:mt-11 flex justify-center items-center group border-white border-solid border-2 hover:bg-white hover:text-black transition-all duration-300"
      >
          <FormattedMessage id="home.btn" />
          <HiArrowRight className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default QuoteBtn;
