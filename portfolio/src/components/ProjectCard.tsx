import { useState } from 'react'
import { motion } from 'framer-motion'
import burger from '../img/burger.jpg'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import dropIn from '../framerDropins/projectCard'
import projectCardType from '../types/projectCardType'

const ProjectCard = ({projectName,projectTitle,summary}:projectCardType) => {
    const [animate,setAnimate]=useState(false)
    const [cardImageHover,setCardImageHover]=useState(false)
    const [cardImageHover2,setCardImageHover2]=useState(false)
  return (
    <motion.div className='clear relative rounded-md bg-red-900 w-[600px] flex flex-col gap-2 items-center justify-center p-10'
        initial={{scale:.7}} animate={animate?{scale:1}:{scale:.6}} transition={{duration:.5}}>
            {animate?<button onClick={()=>setAnimate(false)} className='absolute flex justify-center items-center right-[10px] top-[10px] w-[40px] h-[40px] rounded-full'><AiOutlineCloseCircle color='#5DF0CE' size={50}/></button>:''}
            <header>
                <motion.h1 animate={animate?{fontSize:'40px'}:{fontSize:'70px'}}  className={` text-center text-[#5DF0CE]`}>{projectName}</motion.h1>
            </header>
            <motion.p className={`${animate?'hidden':'inline-block'} text-md text-white text-center md:text-left`} animate={animate?{scale:0}:{scale:1,fontSize:'30px'}}>{projectTitle}</motion.p>
        <motion.div animate={animate?{display:"flex"}:{display:'none'}} className='flex flex-col md:flex-row gap-4'>
            <div className='w-[200px] relative'>
                <div className={`absolute w-[200px] inset-0 z-20
                 pointer-events-none bg-[#373636] opacity-60 text-white
                  text-center flex items-center justify-center
                   overflow-hidden  ${cardImageHover?'h-[100%]':'h-0'} 
                   transition-all ease-linear duration-200`}>Desktop</div>
                   
            <motion.img onHoverStart={()=>setCardImageHover(true)}
                        onHoverEnd={()=>{setCardImageHover(false)}}
                         src={burger} alt="burger"   
                        className='w-[100%] relative z-10' 
                         animate={animate?{scale:1}:{scale:0}}
                         transition={{duration:.7,delay:.3}}/>
            </div>
            <div className='2-[200px] relative'>
                <div className={`absolute w-[200px] inset-0 z-20
                 pointer-events-none bg-[#373636] opacity-60 text-white
                  text-center flex items-center justify-center
                   overflow-hidden  ${cardImageHover2?'h-[100%]':'h-0'} 
                   transition-all ease-linear duration-200`}>Mobile</div>
            <motion.img onHoverStart={()=>setCardImageHover2(true)}
                        onHoverEnd={()=>{setCardImageHover2(false)}}
                     src={burger} alt="burger"   
                    className='w-[200px]' 
                    animate={animate?{scale:1}:{scale:0}}
                    transition={{duration:.7,delay:.3}}/>
            </div>
            </motion.div>
        <motion.p className='text-md text-white my-2 text-center md:text-start' 
        variants={dropIn} initial='hidden' animate={animate?'visible':''} exit='exit'>{summary}</motion.p>
        <motion.button whileHover={{scale:1.6}} whileFocus={{scale:1.6}} animate={animate?{scale:1.5}:{scale:1.5}} onClick={()=>setAnimate(animate=>!animate)} className='bg-black text-white px-4 py-2 rounded-md'>{!animate?'Details':<a href='https://github.com/Theobirmp' target='_blank'>Github</a>}</motion.button>
    </motion.div>
  )
}

export default ProjectCard