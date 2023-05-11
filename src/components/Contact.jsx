import React, { useState, useRef } from 'react'
import { styles } from '../constants'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if (form.name !== '' && form.email !== '' && form.message !== '')
      emailjs
        .send(
          'service_c4z1w2a',
          'template_rnvu0kh',
          {
            from_name: form.name,
            to_name: 'Tomasz',
            from_email: form.email,
            to_email: 'tomasz.iwanicki@onet.pl',
            message: form.message,
          },
          'ar4cYOV9TS7R9r-Ru'
        )
        .then(
          () => {
            setLoading(false)
            alert('Thank you. I will get back to you as soon as possible.')
            setForm({
              name: '',
              email: '',
              message: '',
            })
          },
          (error) => {
            setLoading(false)
            console.log(error)
            alert('Something went wrong.')
          }
        )
    else setLoading(false)
  }

  return (
    <section id="contact" className={`${styles.padding} flex flex-col items-center gap-12 bg-darkGray`}>
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
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="flex md:flex-row flex-col justify-between gap-6 w-full">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="custom-input  w-full" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="custom-input  w-full" />
        </div>
        <textarea placeholder="Enter your message" name="message" value={form.message} onChange={handleChange} className="custom-input resize-none  w-full h-[300px] mt-6"></textarea>
        <div className="mt-8">
          <button type="submit" className="custom-btn">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>
    </section>
  )
}

export default Contact
