import React, { useState, useEffect } from 'react'
import { styles, data, images } from '../constants'

import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    function handleResize() {
      setToggleMenu(false)
    }

    window.addEventListener('resize', handleResize)
  }, [window.innerWidth, window.innerHeight])

  return (
    <nav className={`${styles.padding} flex justify-between items-center bg-primary relative`}>
      <a href="/">
        <p className="text-white text-[18px]">
          Tomasz <span className="text-secondary">Iwanicki</span>
        </p>
      </a>
      <ul className="md:flex hidden lg:gap-12 gap-6">
        {data.navLinks.map((link) => (
          <a href={link.path} key={link.title}>
            <li className="text-white hover:text-secondary">{link.title}</li>
          </a>
        ))}
      </ul>
      <img src={images.iconHamburger} alt="menu" className={`${toggleMenu ? 'hidden' : 'flex'} md:hidden hover:cursor-pointer`} onClick={() => setToggleMenu((prev) => !prev)} />

      <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: toggleMenu ? 0 : '100%' }} transition={{ duration: toggleMenu ? 0.3 : 0.5 }} className="absolute right-0 top-0 h-[100vh] nav-mobile-bg w-3/5">
        <div className="flex flex-col p-6">
          <div className="flex justify-end">
            <img src={images.iconClose} alt="close" onClick={() => setToggleMenu((prev) => !prev)} className="w-[20px] h-[20px] hover:cursor-pointer" />
          </div>
          <ul className="flex flex-col gap-12 mt-12">
            {data.navLinks.map((link) => (
              <a href={link.path} key={link.title}>
                <li className="text-white hover:text-secondary" onClick={() => setToggleMenu(false)}>
                  {link.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
