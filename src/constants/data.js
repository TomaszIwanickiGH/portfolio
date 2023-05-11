import images from './images'

const navLinks = [
  {
    path: '#home',
    title: 'Home',
  },
  {
    path: '#skills',
    title: 'Skills',
  },
  {
    path: '#services',
    title: 'Services',
  },
  {
    path: '#projects',
    title: 'Projects',
  },
  {
    path: '#contact',
    title: 'Contact',
  },
]

const skills = [
  {
    isFirst: true,
    icon: images.htmlLogo,
    name: 'HTML 5',
  },
  {
    isFirst: true,
    icon: images.cssLogo,
    name: 'CSS 3',
  },
  {
    isFirst: true,
    icon: images.jsLogo,
    name: 'JavaScript',
  },
  {
    isFirst: true,
    icon: images.reactLogo,
    name: 'React JS',
  },
  {
    isFirst: true,
    icon: images.tailwindLogo,
    name: 'Tailwind CSS',
  },
  {
    icon: images.githubLogo,
    name: 'Git & Github',
  },
  {
    icon: images.figmaLogo,
    name: 'Figma',
  },
  {
    icon: images.reduxLogo,
    name: 'Redux',
  },
  {
    icon: images.routerLogo,
    name: 'React Router v6',
  },
  {
    icon: images.framerMotionLogo,
    name: 'Framer Motion',
  },
]

const services = [
  {
    image: images.web,
    title: 'Web Development',
    desc: 'Development of custom web pages. Using current technologies and libraries.',
  },
  {
    image: images.smartphone,
    title: 'Responsive Designs',
    desc: 'I offer fully responsive designs for mobile phones, tablets and desktop devices.',
  },
  {
    image: images.earth,
    title: 'Real World Projects',
    desc: 'I make real world applications, which are useful on daily basis.',
  },
]

const projects = [
  {
    image: images.audiophile,
    title: 'AUDIOPHILE',
    description: 'Audiophile is an e-commerce website, which allows users to purchase headphones, speakers and airpods. The website provides lots of different audio devices.',
    tech: 'React Tailwind Redux',
    githubLink: 'https://github.com/TomaszIwanickiGH/audiophile',
    liveDemo: '',
  },
  {
    image: images.designo,
    title: 'DESIGNO',
    description: 'Designo is a  website which includes a lot of different designs for mobile apps, websites and graphics designs.',
    tech: 'React Tailwind Routing',
    githubLink: 'https://github.com/TomaszIwanickiGH/designo',
    liveDemo: '',
  },
  {
    image: images.movieland,
    title: 'MOVIELAND',
    description: 'Movieland is a website which provides a lot of different movies and tv series. It has a bunch of cool features such as image carousels and great search bar.',
    tech: 'React Tailwind Redux',
    githubLink: 'https://github.com/TomaszIwanickiGH/entertainment-app',
    liveDemo: '',
  },
]

export default { navLinks, skills, services, projects }
