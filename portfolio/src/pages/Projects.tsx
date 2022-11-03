import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectCardsContainer from '../components/ProjectCardsContainer';
import { v4 as uuidv4 } from 'uuid';
import cardData from '../data/projectData';
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duraion: 2 } }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0B192E] flex flex-col justify-center items-center text-white"
    >
      <section className="w-[100%] h-[100%] mt-44">
        <header className="text-4xl text-[#5DF0CE] font-bold text-center relative z-30">
          <h3 className="px-2 text-center">Check Out Some of my Projects </h3>
        </header>
        <ProjectCardsContainer>
          {cardData.map((card) => {
            return (
              <ProjectCard
                key={uuidv4()}
                projectName={card.name}
                projectTitle={card.title}
                summary={card.summary}
                img1={card.img1}
                img2={card.img2}
                desktop={card.desktop}
                link1={card.link1}
                link2={card.link2}
              />
            );
          })}
        </ProjectCardsContainer>
      </section>
    </motion.div>
  );
};

export default Projects;
