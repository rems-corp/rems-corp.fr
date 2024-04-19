import ParticlesContainer from "../components/ParticlesContainer";
import QuoteBtn from "../components/QuoteBtn";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FormattedMessage, useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();
  const jobs = Array.from({ length: 4 }, (_, index) => intl.formatMessage({ id: `home.jobs.${index}` }));
  const finalJobs = jobs.reduce((acc, curr) => [...acc, curr, 2000], []);

  return (
    <section id="home" className="bg-primary/60 h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primaty/10 via-black/30 to-black/10">
        <ParticlesContainer />
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Rémi MAZZONE <br />
            <FormattedMessage id="home.title"></FormattedMessage>{' '}
            <TypeAnimation sequence={finalJobs} speed={50} repeat={Infinity} className="text-accent"></TypeAnimation>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            <FormattedMessage id="home.desc" />
          </motion.p>
          <div className="flex justify-center xl:hidden relative"><QuoteBtn /></div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex"><QuoteBtn /></motion.div>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className="absolute right-[18%] bottom-[22%] xl:block hidden">
            <Image src="/logo.png" alt="logo" width={300} height={180} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
