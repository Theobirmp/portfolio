import React from 'react'
import {motion} from 'framer-motion'
import Tabs from '../components/Tabs'
import TabsInfo from '../components/TabsInfo'
const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.2,duraion:2}}} exit={{opacity:0}}
    className='overflow-hidden min-h-screen w-screen bg-[#0B192E] flex justify-center items-center text-[#5DF0CE]'
    >
    {/* <Tabs/> */}
    <TabsInfo/>

    </motion.div>
  )
}

export default About