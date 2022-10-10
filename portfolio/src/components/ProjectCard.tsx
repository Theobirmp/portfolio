import { useState } from 'react'
import { motion } from 'framer-motion'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import dropIn from '../framerDropins/projectCard'
import projectCardType from '../types/projectCardType'

const ProjectCard = ({projectName,projectTitle,summary,img1,img2,desktop,link1,link2}:projectCardType) => {
    const [animate,setAnimate]=useState<boolean>(false)
    const [cardImageHover,setCardImageHover]=useState<boolean>(false)
    const [cardImageHover2,setCardImageHover2]=useState<boolean>(false)
    const [detailsPressed,setDetailsPressed]=useState<boolean>(false)
    const handleDetails=()=>{
        setAnimate(animate=>!animate)
        setDetailsPressed(detailsPressed=>!detailsPressed)
    }
    const closeModal=()=>{
        setAnimate(false)
        setDetailsPressed(false)
    }
  return (
    <motion.div className='clear relative rounded-md bg-red-900 w-[340px] md:w-[600px] flex flex-col gap-2 items-center justify-center p-10'
        initial={{scale:.7}} animate={animate?{scale:1}:{scale:.6}} transition={{duration:.5}}>
            {animate?<button onClick={closeModal} className='absolute flex justify-center items-center right-[10px] top-[10px] w-[40px] h-[40px] rounded-full'><AiOutlineCloseCircle color='#5DF0CE' size={50}/></button>:''}
            <header>
                <motion.h1 animate={animate?{fontSize:'40px'}:{fontSize:'70px'}}  className={` text-center text-[#5DF0CE] md:min-w-max`}>{projectName}</motion.h1>
            </header>
            <motion.p className={`${animate?'hidden':'inline-block'} text-md text-white text-center md:text-left`} animate={animate?{scale:0}:{scale:1,fontSize:'30px'}}>{projectTitle}</motion.p>
        <motion.div animate={animate?{display:"flex"}:{display:'none'}}
         className={`flex ${desktop?'flex-col':'flex-col'} ${desktop?'md:flex-col':'md:flex-row'} gap-4`}>
            <div className={`${desktop?'w-[300px]':'h-[300px] mb-10'} relative`}>
                <div className={`absolute  inset-0 z-20
                 pointer-events-none bg-[#373636] opacity-60 text-white
                  text-center flex items-center justify-center
                   overflow-hidden  ${cardImageHover?'h-[100%]':'h-0'} 
                   transition-all ease-linear duration-200`}>{desktop?'Desktop':"Mobile"}</div>
                   
            <motion.img onHoverStart={()=>setCardImageHover(true)}
                        onHoverEnd={()=>{setCardImageHover(false)}}
                         src={img1} alt="burger"   
                        className='w-[100%] h-[100%] relative z-10' 
                         animate={animate?{scale:1}:{scale:0}}
                         transition={{duration:.7,delay:.3}}/>
            </div>
            <div className={`${desktop?'w-[300px]':'h-[300px]'} relative`}>
                <div className={`absolute  inset-0 z-20
                 pointer-events-none bg-[#373636] opacity-60 text-white
                  text-center flex items-center justify-center
                   overflow-hidden  ${cardImageHover2?'h-[100%]':'h-0'} 
                   transition-all ease-linear duration-200`}>{desktop?'Desktop':"Mobile"}</div>
            <motion.img onHoverStart={()=>setCardImageHover2(true)}
                        onHoverEnd={()=>{setCardImageHover2(false)}}
                     src={img2} alt="burger"   
                    className='w-[100%] h-[100%] relative z-10' 
                    animate={animate?{scale:1}:{scale:0}}
                    transition={{duration:.7,delay:.3}}/>
            </div>
            </motion.div>
        <motion.p className='text-md text-white my-4 text-center md:text-start' 
        variants={dropIn} initial='hidden' animate={animate?'visible':''} exit='exit'>{summary}</motion.p>
        <div className='flex gap-20'>
        <motion.button
         whileHover={{scale:1.6}} whileFocus={{scale:1.6}} animate={animate?{scale:1.5}:{scale:1.5}}
          onClick={handleDetails} className='bg-black text-white px-2 py-1 min-w-max md:px-4 md:py-2 rounded-md'>
            {!animate?'Details':<a href={link1} target='_blank'>Project 1</a>}</motion.button>
        {detailsPressed?<motion.button whileHover={{scale:1.6}} whileFocus={{scale:1.6}}
         animate={animate?{scale:1.5}:{scale:1.5}}
           className='bg-black text-white px-2 py-1 md:px-4 md:py-2 min-w-max rounded-md'>
            {!animate?'Details':<a href={link2} target='_blank'>Project 2</a>}</motion.button>:''}
        </div>
    </motion.div>
  )
}

export default ProjectCard