import {motion} from 'framer-motion'
import 'swiper/css/navigation';
import 'swiper/css';
import { useState } from 'react';
import SwiperModal from '../components/SwiperModal';
import Swiper from '../components/Swiper';
const Skills = () => {
    
        const [modalNumber,setModalNumber]=useState<number>(0)
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.2,duraion:2}}} exit={{opacity:0}}
    className='min-h-screen flex flex-col justify-center
     items-center text-white bg-[#0B192E]'>
      <h3 className='text-4xl text-center font-bold text-[#5DF0CE]'>Core Skills</h3>
    <Swiper setModalNumber={setModalNumber}/>
    <SwiperModal modalNumber={modalNumber} setModalNumber={setModalNumber}/>
    </motion.div>
  )
}

export default Skills