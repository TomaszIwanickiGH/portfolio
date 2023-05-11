import React from 'react'
import { styles, data } from '../constants'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col justify-between items-center bg-primary`} id="skills">
      <motion.div initial={{ opacity: 0, x: '-30%' }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="flex flex-col gap-4 my-16">
        <div className="lg:text-start text-center">
          <h3 className="text-white">
            Favorite <span className="text-secondary">Skills</span>
          </h3>
          <h2 className="text-white text-[36px] font-[600]">My Skills</h2>
        </div>
        <p className="text-[14px] text-lightGray lg:text-start text-center">
          See fully what skills I have and perform. These are the ones I'm <br className="md:flex hidden" /> the most confident with.
        </p>
        <a href="#projects" className="lg:text-start text-center">
          <button className="custom-btn w-[150px]">See projects</button>
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: '30%' }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="flex lg:justify-end justify-center flex-wrap gap-6 lg:w-1/2 w-full">
        <div className="flex flex-col gap-6">
          {data.skills.map(
            (skill) =>
              skill.isFirst && (
                <div className="flex gap-4 xl:w-[300px] lg:w-[120px] md:w-[200px] w-[120px]" key={skill.name}>
                  <img src={skill.icon} alt="icon" className="w-[30px] h-[30px]" />
                  <p className="text-white">{skill.name}</p>
                </div>
              )
          )}
        </div>
        <div className="flex flex-col gap-6">
          {data.skills.map(
            (skill) =>
              !skill.isFirst && (
                <div className="flex gap-4 md:w-[200px] w-[180px]" key={skill.name}>
                  <img src={skill.icon} alt="icon" className="w-[30px] h-[30px]" />
                  <p className="text-white">{skill.name}</p>
                </div>
              )
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
