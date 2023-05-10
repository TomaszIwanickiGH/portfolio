import React from 'react'
import { styles, data } from '../constants'

const Service = ({ image, title, desc }) => (
  <div className="flex flex-col justify-center items-center gap-6 bg-primary rounded-3xl sm:w-[400px] lg:min-h-[270px] w-[300px] py-12 px-6 hover:cursor-pointer">
    <img src={image} alt="img" className="w-[50px] h-[50px]" />
    <h3 className="text-white text-center font-[500] text-[20px]">{title}</h3>
    <p className="text-lightGray text-center mt-2">{desc}</p>
  </div>
)

const Services = () => {
  return (
    <section id="services" className={`${styles.padding} flex flex-col gap-12 bg-darkGray`}>
      <div className="flex flex-col gap-2 justify-center items-center mt-12">
        <h3 className="text-white text-center">
          My <span className="text-secondary">Services</span>
        </h3>
        <h2 className="text-white text-[36px] font-[600]">What I Do</h2>
      </div>
      <div className="flex xl:flex-nowrap md:flex-wrap md:flex-row flex-col xl:justify-between justify-center items-center gap-12 mb-16">
        {data.services.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
