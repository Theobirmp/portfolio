import Backdrop from './components/Backdrop'
import Modal from './components/Modal'
import './index.css'
import FancyModal from './components/FancyModal'
import { useState } from 'react'
import FancyButton from './components/FancyButton'
import ProjectCard from './components/ProjectCard'
import ProjectCardsContainer from './components/ProjectCardsContainer'
import {v4 as uuidv4} from 'uuid';
import Page1 from './pages/IntroPage'
import {BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './components/Navbar'
function App() {  
  const location=useLocation()
  return (
   <>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<IntroPage/>}/>
      <Route path='skills' element={<>
        <Navbar/>
        <Skills/>
              </>
            }/>
      <Route path='projects' element={
        <>
        <Navbar/>
        <Projects/>
        </>
      }/>
      <Route path='about' element={
      <>
        <Navbar/>
        <About/>
      </>
    }/>
    </Routes>
    
    {/* <h1 className='text-black'>modal is open:{modalOpen?'true':'false'}</h1> */}
      {/* <FancyButton modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <FancyModal text={text} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <ProjectCardsContainer>
          {cardData.map(el=><ProjectCard key={uuidv4()} projectName={el.name} summary={el.summary} projectTitle={el.title}/>)}
      </ProjectCardsContainer> */}
         </>

  )
}

export default App
