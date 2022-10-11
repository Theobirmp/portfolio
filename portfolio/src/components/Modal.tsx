import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import dropIn from '../framerDropins/modalDropIn'
import {modalPropTypes} from '../types/modalPropTypes'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'
const Modal = ({onClick}:modalPropTypes) => {
    const [email,setEmail]=useState<string>('')
    const [message,setMessage]=useState<string>('')
    const handleMessageChage=(e:React.FormEvent<HTMLTextAreaElement>)=>{
        setMessage(e.currentTarget.value)
    }
    const handleEmailChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value)
    }
    const handleSubmit=(e:any)=>{
        e.persist()
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xdojddly',
            data: {email,message},
          }).then(message=>console.log(message))
          .catch(error=>console.log(error))
    }
  return (
    <AnimatePresence exitBeforeEnter={true}>
        <div className='relative w-[100%] h-[100%]'>
        <button className='absolute top-2 right-2 md:right-10 md:top-10 text-white z-20' onClick={onClick}><AiOutlineCloseCircle size={40}/></button>
        <motion.div onClick={(e)=>e.stopPropagation()}  
        variants={dropIn} initial='hidden' animate='visible' exit='exit' 
        className='p-2 md:px-0 min-h-screen absolute inset-0 mx-auto clear flex items-center justify-center
         text-black'>
        <form onSubmit={handleSubmit} className='clear w-[100%] h-[100%] md:w-[100%] md:h-[100%] container p-10 mt-4 md:mt-2  flex flex-col items-center justify-center gap-2'>
            <h3 className='text-sm md:text-2xl text-white text-center'>Contact Me</h3>
            <div className='flex flex-col gap-1'>
                <label className='text-sm self-center text-white' htmlFor="email">Email</label>
                <input onChange={handleEmailChange} className='self-center rounded-md px-2 py-[5px]  w-[80%] md:w-[100%]' type="email" name='email' id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-sm text-white' htmlFor="comments">Tell Me Your Opinion</label>
                <textarea onChange={handleMessageChage} className='rounded-md px-2 py-[5px]' name="comments" id="comments" cols={10} rows={5}></textarea>
            </div>
            <motion.button type='submit' whileHover={{scale:1.1}} whileFocus={{scale:1.1}}
             className='px-4 py-2 rounded-full bg-[#1d5880] text-[#5DF0CE] text-sm self-center mt-2'>Submit</motion.button>
        </form>
    </motion.div>
        </div>
      </AnimatePresence>
    
  )
}

export default Modal