import React from 'react'
import { styles, data, images } from '../constants'
import { motion } from 'framer-motion'

const Project = ({ image, title, description, tech, githubLink, liveDemo }) => (
  <div className="flex md:flex-row flex-col justify-center items-center my-4 md:gap-16 gap-8 xl:w-[1000px]">
    <div className="md:w-[400px] w-[250px]">
      <a href={liveDemo} target="_blank">
        <img src={image} alt="img" className="rounded-2xl hover:cursor-pointer w-full" />
      </a>
    </div>
    <div className="flex flex-col justify-start items-center gap-4 md:w-1/2 w-full">
      <h3 className="text-white text-[18px] font-[700]">{title}</h3>
      <p className="text-lightGray text-[15px] lg:w-[60%] w-full text-center">{description}</p>
      <p className="flex flex-wrap gap-4 text-secondary text-center word-spacing font-bold">{tech}</p>
      <div className="flex gap-4 text-white">
        <a href={githubLink} target="_blank">
          <div className="flex gap-2">
            Code <img src={images.githubLogo} className="w-[25px] h-[25px]" />
          </div>
        </a>
        <a href={liveDemo} target="_blank">
          <div className="flex gap-2">
            Live Demo <img src={images.iconLive} className="w-[25px] h-[25px]" />
          </div>
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className={`${styles.padding} flex flex-col items-center gap-12 bg-primary`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: '-40%' },
        }}
        className="flex flex-col gap-2 justify-center items-center mt-6"
      >
        <h3 className="text-white text-center">
          My <span className="text-secondary">Work</span>
        </h3>
        <h2 className="text-white md:text-[36px] text-[28px] font-[600]">Recent Projects</h2>
      </motion.div>
      <div className="flex flex-col gap-8 items-center">
        {data.projects.map((project, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: '-40%' },
            }}
          >
            <Project key={project.title} {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
