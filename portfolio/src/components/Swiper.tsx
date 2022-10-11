import { Swiper as SwiperLocal, SwiperSlide } from 'swiper/react';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import { useState } from 'react';
import swiperType from '../types/swiperTypes';
import { motion } from 'framer-motion';
import { swiperData } from '../data/swiperData';
import {v4 as uuidv4} from 'uuid';
const Swiper = ({setModalNumber}:swiperType) => {
    const width=window.innerWidth
    let numberOfSlides=3
        if(width<1028) numberOfSlides=2
        if(width<768) numberOfSlides=1
        const [swiper,setSwiper]=useState<null | any>(null)
  return (
    <motion.section initial={{opacity:0,y:'-100px'}} animate={{opacity:1,y:0,transition:{delay:1,duration:1}}} className='w-[100vw] p-20'>
    <SwiperLocal
    className='w-[100%] h-[200px]'
        spaceBetween={50}
        slidesPerView={numberOfSlides}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setSwiper(swiper)}
        autoplay={true}
        speed={1000}
        loop={true}
        navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >{swiperData.map((data,index)=>(
            <SwiperSlide key={uuidv4()}
                    className='cursor-grab flex flex-col gap-3 items-center justify-center px-2 md:px-4 py-2 bg-[#112240] rounded-lg shadow-cardShadow'>
                <h4 className="text-center bold text-4xl text-[#5DF0CE]">{swiperData[index].title}</h4>
                <p className="text-center text-opacity-60 text-white">{swiperData[index].description}</p>
                <button onClick={()=>setModalNumber(index+1)}
             className='hidden lg:block hover:scale-110 bg-[#1d5880] px-4 py-2 rounded-full text-white'>Example</button>
        </SwiperSlide>
        ))}
    </SwiperLocal>
        <button onClick={()=>swiper.slidePrev()} className='hasIcon md:inline-block prev absolute left-6 top-[50%] translate-y-[-50%]'><FaArrowLeft className='isIcon hover:scale-110' size={40}/></button>
        <button onClick={()=>swiper.slideNext()} className='hasIcon md:inline-block next absolute right-6 top-[50%] translate-y-[-50%]'><FaArrowRight className='isIcon hover:scale-110' size={40}/></button>
    </motion.section>
  )
}

export default Swiper