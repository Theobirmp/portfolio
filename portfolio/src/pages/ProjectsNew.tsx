import ProjectCardNew from '../components/ProjectCardNew';
import { newCardData } from '../data/projectData';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
const ProjectsNew = () => {
  return (
    //page container
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duraion: 2 } }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      {/* projects container */}
      <div className="mt-52 flex flex-col gap-10 justify-center items-center">
        <h3 className="text-4xl text-center font-bold text-[#5DF0CE]">
          Check Out Some of my Projects
        </h3>
        <motion.div
          initial={{ opacity: 0, y: '-100px' }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1 } }}
          className="grid overflow-hidden grid-cols-1 md:grid-cols-2 auto-rows-fr grid-flow-row gap-10"
        >
          {newCardData.map((card) => (
            <ProjectCardNew key={uuidv4()} {...card} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsNew;
