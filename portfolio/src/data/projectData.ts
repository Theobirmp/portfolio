// import foodDesktop from '../img/projectScreenshots/foodDesktop.png'
// import foodMobile from '../img/projectScreenshots/foodMobile.png'
// import manageDesktop from '../img/projectScreenshots/manageDesktop.png'
// import manageMobile from '../img/projectScreenshots/manageMobile.png'
// import fbDesktop from '../img/projectScreenshots/fbDesktop.png'
// import fbMobile from '../img/projectScreenshots/fbMobile.png'
// import exerciseDesktop from '../img/projectScreenshots/exerciseDesktop.png'
// import exerciseMobile from '../img/projectScreenshots/exerciseMobile.png'
// import test from '../../public/img/projectScreenshots/manageDesktop.png'
const cardData = [
  {
    name: 'React - Desktop',
    title: 'Exercise App - Facebook like UI',
    summary:
      'Project 1:Full Stack with signup and login functionality, each user has its own workout. \n Project 2: UI only SPA with dark mode, mimicing Facebook UI, Notification mute, personal mesage functionality',
    img1: 'img/projectScreenshots/exerciseDesktop.png',
    img2: 'img/projectScreenshots/fbDesktop.png',
    desktop: true,
    link1: 'https://github.com/Theobirmp/exercise-mern',
    link2: 'https://github.com/Theobirmp/fb-like-mui',
  },
  {
    name: 'React - Mobile',
    title: 'Exercise App - Facebook like UI',
    summary: `Project 1:Full Stack with signup and login functionality, each user has its own workout. \n Project 2: UI only SPA with dark mode, mimicing Facebook UI, Notification mute, personal mesage functionality`,
    img1: 'img/projectScreenshots/exerciseMobile.png',
    img2: 'img/projectScreenshots/fbMobile.png',
    desktop: false,
    link1: 'https://github.com/Theobirmp/exercise-mern',
    link2: 'https://github.com/Theobirmp/fb-like-mui',
  },
  {
    name: 'Vanilla - Desktop',
    title: 'Manage Landing - Food Store Landing',
    summary:
      'Project 1: Home Page with Swiper from coding challenge. Project 2: Home Page with custom animations using Intersection Observer API',
    img1: 'img/projectScreenshots/manageDesktop.png',
    img2: 'img/projectScreenshots/foodDesktop.png',
    desktop: true,
    link1: 'https://github.com/Theobirmp/manage-landing',
    link2: 'https://github.com/Theobirmp/food-store-home',
  },
  {
    name: 'Vanilla - Mobile',
    title: 'Manage Landing - Food Store Landing',
    summary:
      'Project 1: Home Page with Swiper from coding challenge. Project 2: Home Page with custom animations using Intersection Observer API',
    img1: 'img/projectScreenshots/manageMobile.png',
    img2: 'img/projectScreenshots/foodMobile.png',
    desktop: false,
    link1: 'https://github.com/Theobirmp/manage-landing',
    link2: 'https://github.com/Theobirmp/food-store-home',
  },
];
export const newCardData = [
  {
    name: 'Exercise App',
    img: 'img/projectScreenshots/exerciseDesktop.png',
    technologies: ['React,', ' MUI,', ' Node.js,', ' Express.js,', ' MongoDB'],
    link: 'https://github.com/Theobirmp/exercise-mern',
  },
  {
    name: 'Facebook like UI',
    img: 'img/projectScreenshots/fbDesktop.png',
    technologies: ['React,', ' MUI'],
    link: 'https://github.com/Theobirmp/fb-like-mui',
  },
  {
    name: 'Portfolio Template',
    img: 'img/projectScreenshots/portfolioTemplate.png',
    technologies: ['React,', ' Tailwind,', ' Framer Motion'],
    link: 'https://portfolio-template-navy.vercel.app/',
  },
  {
    name: 'Food Store Home Page',
    img: 'img/projectScreenshots/foodDesktop.png',
    technologies: ['HTML,', ' SASS', ' Vanilla JS'],
    link: 'https://github.com/Theobirmp/food-store-home',
  },
  {
    name: 'Manage Landing Page',
    img: 'img/projectScreenshots/manageDesktop.png',
    technologies: ['HTML,', ' Tailwind', 'Vanilla JS'],
    link: 'https://github.com/Theobirmp/manage-landing',
  },
];
export default cardData;
