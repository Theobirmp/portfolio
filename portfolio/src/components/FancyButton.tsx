import {motion} from 'framer-motion'
import FancyButtonPropTypes from '../types/fancyButtonType'


const FancyButton = ({modalOpen,setModalOpen,mobile}:FancyButtonPropTypes) => {
  const handleModalOpen=()=>{
    setModalOpen(!modalOpen)
    document.body.classList.toggle('overflow-hidden')
    console.log('modal is open')
  }
  return (
<motion.button  
  whileHover={{scale:1.05}} whileTap={{scale:.95}} onClick={handleModalOpen}
 className={`${mobile?'inline-block md:hidden':'hidden md:inline-block'}  md:ml-auto w-[200px] px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear`}>Contact</motion.button>
  )
}

export default FancyButton