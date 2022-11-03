import { useState } from 'react';
import { Link } from 'react-router-dom';
import FancyButton from './FancyButton';
import FancyModal from './FancyModal';
import { motion } from 'framer-motion';
import { DiReact } from 'react-icons/di';
import { MdOutlineMenu } from 'react-icons/md';
import resume from '../BirmpilisTheofanisResume.pdf';
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const text = 'this is some text';
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const openHamburgerMenu = () => {
    setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);
  };
  const closeHamburgerMenu = () => {
    setHamburgerOpen(false);
  };
  return (
    // <div className="h-[80px] bg-transparent">
    <motion.header
      initial={{ y: '-80px' }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ y: '-80px' }}
      className="absolute z-2 top-0 left-0 right-0 w-screen h-[80px] bg-[#0B192E]"
    >
      <nav className="h-[100%] flex justify-between px-4 md:px-0">
        <ul className="hidden md:flex justify-center gap-10 items-center md:gap-0 px-10 h-[100%] w-[100%]">
          <Link
            to="/about"
            className="hidden md:inline-block hover:rotate-90 mr-auto px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
          >
            <DiReact size="70px" color="#5DF0CE" />
          </Link>
          <Link
            className="hidden md:inline-block px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hidden md:inline-block px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className="hidden md:inline-block px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/projects"
          >
            Projects
          </Link>
          <FancyButton
            mobile={false}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <FancyModal
            text={text}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <a
            className="hidden md:inline-block border-[#5DF0CE] border-solid border-2 px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            href={resume}
            target="_blank"
          >
            Resume
          </a>
        </ul>
        <Link
          to="/about"
          className="flex justify-start md:hidden hover:rotate-90 md:mr-auto text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
        >
          <DiReact size="70px" color="#5DF0CE" />
        </Link>
        <button
          onClick={openHamburgerMenu}
          className="inline-block md:hidden text-white"
        >
          <MdOutlineMenu size="40px" />
        </button>
        {/* mobile navigation */}
        <ul
          className={`${
            hamburgerOpen ? 'h-screen' : 'h-0'
          } overflow-hidden transition-all duration-200 ease-linear md:hidden absolute inset-0 w-screen  bg-black z-[999] flex flex-col justify-center items-center gap-16`}
        >
          <button
            onClick={closeHamburgerMenu}
            className="px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear underline"
          >
            Go Back
          </button>
          <Link
            onClick={closeHamburgerMenu}
            className="px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={closeHamburgerMenu}
            className="px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/skills"
          >
            Skills
          </Link>
          <Link
            onClick={closeHamburgerMenu}
            className="px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            to="/projects"
          >
            Projects
          </Link>
          <FancyButton
            mobile={true}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <FancyModal
            text={text}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <a
            onClick={closeHamburgerMenu}
            className="border-[#5DF0CE] border-solid border-2 px-6 py-2  text-[#64718B] text-md rounded-md hover:bg-blue-[#398E86] hover:text-[#5DF0CE] transition-all duration-200 ease-linear"
            href={resume}
            target="_blank"
          >
            Resume
          </a>
        </ul>
      </nav>
    </motion.header>
    // </div>
  );
};
export default Navbar;
