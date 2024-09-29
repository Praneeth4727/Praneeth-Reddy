import { HERO } from "../constants";
import carlImg from "../assets/carl.jpeg";
import { motion } from "framer-motion";
import resume from "../assets/Praneeth_Gaddam_Resume.pdf";
// import { saveAs } from "file-saver";
// import { jsPDF } from "jspdf";

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = resume;
  link.setAttribute('download', 'Praneeth_Gaddam_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[4rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={downloadResume}
          className="px-4 py-2 text-xl font-semibold text-white bg-violet-500 rounded-md shadow-md"
        >
          My Resume
        </motion.button>
        
      </motion.div>
      <motion.div
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
      className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          src={carlImg} width={450} height={450} alt="Praneeth" className="rounded-3xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
