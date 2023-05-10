import React from 'react'
import { styles, data } from '../constants'
import { motion } from 'framer-motion'

const Service = ({ image, title, desc }) => (
  <div className="flex flex-col justify-center items-center gap-6 bg-primary rounded-3xl sm:w-[350px] h-[300px] w-[300px] py-12 px-6 hover:cursor-pointer">
    <img src={image} alt="img" className="w-[50px] h-[50px]" />
    <h3 className="text-white text-center font-[500] text-[20px]">{title}</h3>
    <p className="text-lightGray text-center mt-2">{desc}</p>
  </div>
)

const Services = () => {
  return (
    <section id="services" className={`${styles.padding} flex flex-col gap-12 bg-darkGray`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: '-40%' },
        }}
        class
        className="flex flex-col gap-2 justify-center items-center mt-12"
      >
        <h3 className="text-white text-center">
          My <span className="text-secondary">Services</span>
        </h3>
        <h2 className="text-white text-[36px] font-[600]">What I Do</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="flex xl:flex-nowrap md:flex-wrap md:flex-row flex-col xl:justify-between justify-center items-center gap-12 mb-16"
      >
        {data.services.map((service, index) => (
          <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 1, duration: 1.3 }} key={service.title}>
            <Service {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
