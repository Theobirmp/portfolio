import { motion } from "framer-motion"
import burger from '../img/burger.jpg';
import { Link } from "react-router-dom";
import { dropIn,dropInInner } from "../framerDropins/introPageDropIn";
import AnimatedBoxes from "../components/AnimatedBoxes";
const Page1 = () => {
    
  return (
    <motion.section className="py-10 relative w-screen h-screen bg-[#0B192E] flex justify-center items-center"
                    initial={{x:'-100vw'}} animate={{x:0,transition:{duraion:1}}} exit={{x:'100vw'}}>
        <header className=" text-2xl md:text-[4.25vw] text-white w-[100%] h-[100%] flex flex-col lg:flex-row">
            <motion.div
             initial={{opacity:0}} animate={{opacity:1,transition:{delay:5,duration:2}}}
              className="p-4 lg:p-0 flex-1 h-[100%] flex  justify-center items-center">
                {/* <img src={burger} alt="creator" /> */}
                <AnimatedBoxes/>
            </motion.div>
            <motion.h1 variants={dropIn} initial='initial' animate='visible'
                        className=" flex flex-col items-start p-2 md:p-10 justify-center gap-2 md:gap-20 flex-1 h-[100%]">
                <motion.h3 >Hello!</motion.h3>
                <motion.div variants={dropInInner}>
                    <motion.span variants={dropIn}> I</motion.span>
                    <motion.span variants={dropIn}> am</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> Fanis</motion.span>
                </motion.div>
                <motion.div className="w-max" variants={dropInInner}>
                    <motion.span variants={dropIn}>A</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> Front</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> End</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> Developer</motion.span>
                </motion.div>
                <motion.div variants={dropInInner}>
                    <motion.span variants={dropIn}> and</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> React</motion.span>
                    <motion.span className="threeD tracking-wide text-[#5DF0CE]" variants={dropIn}> Lover</motion.span>
                </motion.div>
            </motion.h1>
        </header>
        <motion.button 
        initial={{x:'-100vw'}} animate={{x:0,transition:{delay:5,duration:1}}} whileHover={{scale:1.2}} whileFocus={{scale:1.2}} 
        className="absolute bottom-10 right-10 rounded-full bg-[#1d5880] w-[90px] h-[45px] md:w-[140px] md:h-[70px] text-[#5DF0CE]"><Link className="w-[100%] h-[100%] flex items-center justify-center text-xl md:text-4xl " to='/about'>Home</Link></motion.button>
    </motion.section>
  )
}

export default Page1