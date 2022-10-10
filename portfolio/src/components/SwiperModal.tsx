import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import {swiperDataCards} from '../data/swiperData'
import dropIn from '../framerDropins/swiperModal'
import swiperModalType from '../types/swiperModalTypes'
import {GiCancel} from 'react-icons/Gi'
import React from 'react'
import backdropTypes from '../types/backdropTypes'
import { useRef } from 'react'
const SwiperModal = ({modalNumber,setModalNumber}:swiperModalType) => {
    const handleClick=(e:React.ChangeEvent<backdropTypes>)=>{
        e.stopPropagation()
        setModalNumber(0)
    }
    const focusImage1=()=>{
      image.current.classList.add('scale-150')
      image.current.classList.add('translate-x-[50%]')
    }
    const unfocusImage1=()=>{
      image.current.classList.remove('scale-150')
      image.current.classList.remove('translate-x-[50%]')
    }
    const focusImage2=()=>{
      image2.current.classList.add('scale-150')
      image2.current.classList.add('translate-x-[-50%]')
    }
    const unfocusImage2=()=>{
      image2.current.classList.remove('scale-150')
      image2.current.classList.remove('translate-x-[-50%]')
    }
    const image=useRef<any>()
    const image2=useRef<any>()
  return (
    <>
    {modalNumber!==0?(
    <Backdrop onClick={handleClick}>
        <motion.div onClick={(e)=>e.stopPropagation()}  
        variants={dropIn} initial='hidden' animate='visible' exit='exit' 
        className='relative p-8 clear flex items-center justify-center gap-10
         text-black max-h-[800px] overflow-hidden'>
            <button onClick={()=>setModalNumber(0)}
             className='absolute right-2 top-2 '><GiCancel color='white'/></button>
            <div 
                onMouseOver={focusImage1} onMouseLeave={unfocusImage1}
                className='shadow-md flex gap-4 border-solid border-white border-[2px]'>
                {/* <h3 className='self-center p-4 text-[#5DF0CE]'>{swiperDataCards[modalNumber-1].title1}</h3> */}
                    <img ref={image}                      className='pointer-events-none w-[15vw] h-[15vw]
                       transition-all ease-linear 250ms'
                        src={swiperDataCards[modalNumber-1].img1} alt="code" />
            </div>
            <div onMouseOver={focusImage2} onMouseLeave={unfocusImage2} className='shadow-md border-solid border-white border-[2px] flex gap-4'>
                {/* <h3 className='self-center p-4 text-[#5DF0CE]'>{swiperDataCards[modalNumber-1].title2}</h3> */}
                <img ref={image2}
                 className='pointer-events-none transition-all ease-linear 250ms w-[15vw] h-[15vw]' src={swiperDataCards[modalNumber-1].img2} alt="code" />
            </div>
            </motion.div>
    </Backdrop>
    ):
    ''}
    </>
  )
}

export default SwiperModal