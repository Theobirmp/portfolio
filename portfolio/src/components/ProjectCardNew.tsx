type projectCardNewType = {
  name: string;
  img: string;
  technologies: string[];
  link: string;
};
import { AiFillGithub } from 'react-icons/ai';

const ProjectCardNew = ({
  name,
  img,
  technologies,
  link,
}: projectCardNewType) => {
  return (
    <div className=" py-2 px-1 max-h-[400px] max-w-[400px] clear text-white flex flex-col gap-4">
      <header>
        <h3 className="pl-2 uppercase font-bold text-white opacity-90">
          {name}
        </h3>
      </header>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="px-2 flex justify-between items-center">
        <h4>{technologies.map((tech) => tech)}</h4>
        <a href={link} target="_blank">
          <AiFillGithub
            size={40}
            className="hover:scale-125 transition-all ease-linear duration-100"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCardNew;
