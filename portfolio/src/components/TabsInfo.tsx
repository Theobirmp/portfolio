import { useEffect, useState } from 'react'
import {AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillPhone} from 'react-icons/ai'
import data from '../data/tabsInfoData'
import tabsInfoDataType from '../types/tabInfoType'
import { motion } from 'framer-motion'
import {header,headerButton} from '../framerDropins/tabsInfo'
const TabsInfo = () => {
    const [tabsSelected,setTabsSelected]=useState<tabsInfoDataType>({tab1:false,tab2:false,tab3:false,tab4:false})
    const [tabsEmpty,setTabsEmpty]=useState<boolean>(true)
    useEffect(()=>{
        if(tabsSelected.tab1 || tabsSelected.tab2 || tabsSelected.tab3 || tabsSelected.tab4 ){
            setTabsEmpty(false)
            return
        } 
        setTabsEmpty(true)
    },[tabsSelected])
  return (
    <>
    <section className='w-[90%] md:w-[80%] mx-auto mt-32 md:mt-20'>
        <motion.header className='flex gap-10 flex-col md:flex-row' 
                        variants={header} initial='initial' animate='visible' exit='exit'>
            <motion.button variants={headerButton} onClick={()=>setTabsSelected({...tabsSelected,tab1:!tabsSelected.tab1})} className={`px-4 py-2 rounded-md transition-all ease-linear duration-200 ${tabsSelected.tab1?'bg-[#5DF0CE] text-blue-900 translate-y-[-10px] scale-110':'bg-[#112240] text-white'}`}>{data[0].title}</motion.button>
            <motion.button variants={headerButton} onClick={()=>setTabsSelected({...tabsSelected,tab2:!tabsSelected.tab2})} className={`px-4 py-2 rounded-md transition-all ease-linear duration-200 ${tabsSelected.tab2?'bg-[#5DF0CE] text-blue-900 translate-y-[-10px] scale-110':'bg-[#112240] text-white'}`}>{data[1].title}</motion.button>
            <motion.button variants={headerButton} onClick={()=>setTabsSelected({...tabsSelected,tab3:!tabsSelected.tab3})} className={`px-4 py-2 rounded-md transition-all ease-linear duration-200 ${tabsSelected.tab3?'bg-[#5DF0CE] text-blue-900 translate-y-[-10px] scale-110':'bg-[#112240] text-white'}`}>{data[2].title}</motion.button>
            <motion.button variants={headerButton} onClick={()=>setTabsSelected({...tabsSelected,tab4:!tabsSelected.tab4})} className={`px-4 py-2 rounded-md transition-all ease-linear duration-200 ${tabsSelected.tab4?'bg-[#5DF0CE] text-blue-900 translate-y-[-10px] scale-110':'bg-[#112240] text-white'}`}>{data[3].title}</motion.button>
        </motion.header>
        <section className='flex flex-col gap-6 mt-10 clear p-4 relative'>
            {tabsEmpty?<motion.span initial={{opacity:0}} animate={{opacity:1,transition:{delay:.5,duration:.5}}} className='hidden md:inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl'>Use the navigation to learn more</motion.span>:''}
                <div className='flex flex-col gap-4'>
                    <h3 className={`text-xl font-bold transition-all ease-linear duration-300 ${tabsSelected.tab1?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[0].title}</h3>
                    <p className={`text-white transition-all ease-linear duration-300  ${tabsSelected.tab1?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[0].description}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className={`text-xl font-bold transition-all ease-linear duration-300 ${tabsSelected.tab2?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[1].title}</h3>
                    <p className={`text-white transition-all ease-linear duration-300 ${tabsSelected.tab2?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[1].description}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3  className={`text-xl font-bold transition-all ease-linear duration-300 ${tabsSelected.tab3?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[2].title}</h3>
                    <p className={`text-white transition-all ease-linear duration-300 ${tabsSelected.tab3?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[2].description}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className={`text-xl font-bold transition-all ease-linear duration-300 ${tabsSelected.tab4?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>{data[3].title}</h3>
                    <div className={`mt-4 flex gap-4 transition-all ease-linear duration-300 ${tabsSelected.tab4?'y-0 opacity-100':'translate-y-[-20px] opacity-0'}`}>
                        <a href='https://github.com/Theobirmp' target='_blank' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#333] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillGithub color='white' size='70px'/>
                        </a>
                        <a href='https://www.linkedin.com/in/theofanis-birmpilis-0566ba245/' target='_blank' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#0a66c2] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillLinkedin color='white' size='70px'/>
                        </a>
                        <a href='mailto:mailto:theobirmpil@gmail.com'
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#BB001B] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiOutlineMail color='white' size='70px'/>
                        </a>
                        <a href='tel:6986615856' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-black transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillPhone color='white' size='70px'/>
                        </a>
                    </div>
                </div>
        </section>
    </section>
    </>
  )
}

export default TabsInfo