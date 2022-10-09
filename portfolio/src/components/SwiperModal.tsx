import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import {swiperDataCards} from '../data/swiperData'
import dropIn from '../framerDropins/swiperModal'
import swiperModalType from '../types/swiperModalTypes'
import {GiCancel} from 'react-icons/Gi'
import React from 'react'
import backdropTypes from '../types/backdropTypes'
const SwiperModal = ({modalNumber,setModalNumber}:swiperModalType) => {
    const handleClick=(e:React.ChangeEvent<backdropTypes>)=>{
        e.stopPropagation()
        setModalNumber(0)
    }
  return (
    <>
    {modalNumber!==0?(
    <Backdrop onClick={handleClick}>
        <motion.div onClick={(e)=>e.stopPropagation()}  
        variants={dropIn} initial='hidden' animate='visible' exit='exit' 
        className='relative p-8 clear flex flex-col items-center justify-center gap-10
         text-black'>
            <button onClick={()=>setModalNumber(0)}
             className='absolute right-2 top-2 '><GiCancel color='white'/></button>
            <div className='shadow-md flex gap-4 border-solid border-white border-[2px]'>
                <h3 className='self-center p-4 text-[#5DF0CE]'>{swiperDataCards[modalNumber-1].title1}</h3>
                    <img className='w-40' src={swiperDataCards[modalNumber-1].img1} alt="code" />
            </div>
            <div className='shadow-md border-solid border-white border-[2px] flex gap-4'>
                <h3 className='self-center p-4 text-[#5DF0CE]'>{swiperDataCards[modalNumber-1].title2}</h3>
                <img className='w-40' src={swiperDataCards[modalNumber-1].img2} alt="code" />
            </div>
            </motion.div>
    </Backdrop>
    ):
    ''}
    </>
  )
}

export default SwiperModal