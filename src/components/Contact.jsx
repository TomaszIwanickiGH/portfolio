import React from 'react'
import { styles } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className={`${styles.padding} flex flex-col items-center gap-12 bg-darkGray`}>
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
          Get in <span className="text-secondary">Touch</span>
        </h3>
        <h2 className="text-white md:text-[36px] text-[28px] font-[600]">Contact me</h2>
      </motion.div>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: '-40%' },
        }}
        className="flex flex-col items-center lg:w-[800px] w-full  mb-8"
      >
        <div className="flex md:flex-row flex-col justify-between gap-6 w-full">
          <input type="text" placeholder="Enter your name" className="custom-input  w-full" />
          <input type="text" placeholder="Enter your email" className="custom-input  w-full" />
        </div>
        <textarea placeholder="Enter your message" className="custom-input resize-none  w-full h-[300px] mt-6"></textarea>
        <div className="mt-8">
          <button type="submit" className="custom-btn">
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  )
}

export default Contact
