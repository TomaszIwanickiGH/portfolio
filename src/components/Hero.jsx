import React from 'react'
import { styles, images } from '../constants'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col-reverse justify-between bg-darkGray`} id="home">
      <motion.div initial={{ x: '-30%' }} animate={{ x: 0 }} transition={{ duration: 0.9 }} className="flex flex-col lg:items-start items-center mt-16 lg:mb-28 mb-16 gap-6">
        <div className="flex flex-col lg:items-start items-center">
          <p className="text-white font-[500] text-[24px]">
            Hello, <span className="text-secondary ml-2">I'm</span>
          </p>
          <p className="text-secondary md:text-[40px] text-[32px] font-[600]">Tomasz Iwanicki</p>
          <p className="text-white font-[500] text-[24px]">Front-end Developer</p>
        </div>
        <p className="text-lightGray text-[14px] lg:w-1/2 w-full lg:text-start text-center">I create web pages with UI/UX user interface. With knowledge in web development, I offer the best projects and designs.</p>
        <a href="#contact">
          <button className="custom-btn w-[120px]">Let's Talk</button>
        </a>
      </motion.div>
      <motion.div initial={{ x: '30%' }} animate={{ x: 0 }} transition={{ duration: 0.9 }} className="xl:w-1/2 w-full lg:mb-0 my-6">
        <img src={images.vsCodeImage} alt="vscode" className="rounded-lg lg:min-h-[350px]" />
      </motion.div>
    </section>
  )
}

export default Hero
