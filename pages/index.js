import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import QuoteBtn from "../components/QuoteBtn";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primaty/10 via-black/30 to-black/10">
      <ParticlesContainer />
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">Transforming Ideas <br /> Into{' '} <span className="text-accent">Digital Reality</span></motion.h1>
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Lorem jskqljdklsqn ds qhdhsqjsqk djkqshdkjshqkdj qskd hkjqsh dkjsqh kd kjqs hdkjqsh ksn xqkjhdkjsqjlkd jslqdjl sqhdksqdh sqhdhlksqhdiusqyhds qnkjdnsqkd osq dkjq dlsqkdosq</motion.p>
        <div className="flex justify-center xl:hidden relative"><QuoteBtn /></div>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex"><QuoteBtn /></motion.div>
      </div>
    </div>
  </div>;
};

export default Home;
