import {motion} from 'framer-motion'
import {dropIn}  from '../framerDropins/projectCards'
import childrenType from '../types/childrenType'


const ProjectCardsContainer = ({children}:childrenType) => {
  return (
    <motion.div variants={dropIn} initial='initial' animate='visible' exit='exit' 
    className='h-screen flex justify-center items-center gap-4 flex-wrap bg-[#0B192E] p-10'>
        {children}
    </motion.div>
  )
}

export default ProjectCardsContainer