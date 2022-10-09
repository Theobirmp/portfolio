import {AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillPhone} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Tabs = () => {
  return (
    <div className="tabs mt-32">
            <input type="radio" name="about1" id="html" checked/>
            <input type="radio" name="about2" id="mui"/>
            <input type="radio" name="about3" id="react"/>
            <input type="radio" name="about4" id="node"/>
            <nav className="tabs-button-container">
                <label className="tabs-button" htmlFor="html">About</label>
                <label className="tabs-button" htmlFor="mui">XP</label>
                <label className="tabs-button" htmlFor="react">Passion</label>
                <label className="tabs-button" htmlFor="node">Find Me</label>
            </nav>
            <div className="tabs-content">
                <div className="tabs-content-tab tab-1">
                    <h3>About Me</h3>
                    <p>I am a Front End Developer with a passion about anything Web Related</p>
                </div>
                <div className="tabs-content-tab tab-2">
                    <h3>Experience</h3>
                    <p>I have worked in the industry as a Front End Developer as a part of a LAMP stack.
                    In my previous role i was responsible for developing pixel perfect and responsive websites, creating animations with CSS and Javascript and managing the project state. I worked closely with project managers to deliver requirements and designers and backend developers to bring the customers' needs to life.
                    </p>
                </div>
                <div className="tabs-content-tab tab-3">
                    <h3>REACT</h3>
                    <p>I love React and its ecosystem. Though i don't have any work experience on the framework i have created many projects using React.js and relative technologies.
                        I have worked with Context Api and Redux/Redux Toolkit to manage the state of the SPA, libraries like MUI and Tailwind to create rich and responsive components and animation libraries like GSAP and
                        Framer Motion to bring life into my SPAs.
                        I have also worked with APIs both on the front and back end.
                        I have used fetch and axios to make requests to the server and build my own APIs with Node.js and Express.js . 
                        Lastly i am familiar with databases and have some hands on experience with NoSQL databases like MondoDB
                    </p>
                </div>
                <div className="tabs-content-tab tab-4">
                    <h3>You can Find Me Here</h3>
                    <div className="mt-4 flex gap-4">
                        <a href='https://github.com/Theobirmp' target='_blank' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#333] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillGithub size='70px'/>
                        </a>
                        <a href='https://www.linkedin.com/in/theofanis-birmpilis-0566ba245/' target='_blank' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#0a66c2] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillLinkedin size='70px'/>
                        </a>
                        <a href='mailto:mailto:theobirmpil@gmail.com'
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-[#BB001B] transition-all ease-linear duration-200 px-4 py-2'>
                            <AiOutlineMail className='' size='70px'/>
                        </a>
                        <a href='tel:6986615856' 
                            className='hover:scale-110 rounded-md hover:bg-white hover:text-black transition-all ease-linear duration-200 px-4 py-2'>
                            <AiFillPhone size='70px'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Tabs

