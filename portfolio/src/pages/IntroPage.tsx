import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { dropIn, dropInInner } from '../framerDropins/introPageDropIn';
import AnimatedBoxes from '../components/AnimatedBoxes';
import '../index.css';
const Page1 = () => {
  return (
    <motion.section
      className="py-10 relative w-[100vw] h-screen bg-[#0B192E] flex justify-center items-center"
      initial={{ x: '-100vw' }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: '100vw' }}
    >
      <header className=" text-2xl md:text-[4.25vw] text-white w-[100%] h-[100%] flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 5, duration: 2 } }}
          className="p-4 lg:p-0 flex-1 h-[100%] flex  justify-center items-center"
        >
          <AnimatedBoxes />
        </motion.div>
        <motion.h1
          variants={dropIn}
          initial="initial"
          animate="visible"
          className=" flex flex-col items-start p-2 md:p-10 justify-center gap-2 md:gap-20 flex-1 h-[100%]"
        >
          <motion.h3 className="neonText">Hello!</motion.h3>
          <motion.div variants={dropInInner}>
            <motion.span variants={dropIn}> I</motion.span>
            <motion.span variants={dropIn}> am</motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              Fanis
            </motion.span>
          </motion.div>
          <motion.div className="w-max" variants={dropInInner}>
            <motion.span className="text-opacity-50!imoor" variants={dropIn}>
              a
            </motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              Front
            </motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              End
            </motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              Developer
            </motion.span>
          </motion.div>
          <motion.div variants={dropInInner}>
            <motion.span variants={dropIn}> and</motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              React
            </motion.span>
            <motion.span
              className=" tracking-wide text-[#5DF0CE] neonText"
              variants={dropIn}
            >
              {' '}
              Enthusiast
            </motion.span>
          </motion.div>
        </motion.h1>
      </header>
      <div className="absolute bottom-4 right-4 sm:bottom-20 sm:right-10 xl:bottom-28 xl:right-20">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
          className="neon-button rounded-full text-[#5DF0CE]"
        >
          <Link
            className="z-[999] relative w-[100%] h-[100%] flex items-center justify-center text-xl md:text-4xl "
            to="/about"
          >
            About Me
          </Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Page1;
