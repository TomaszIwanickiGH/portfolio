import React from 'react'
import { images, styles } from '../constants'

const Footer = () => {
  return (
    <footer className={`${styles.paddingFooter} flex md:flex-row flex-col gap-12 items-center justify-between bg-primary`}>
      <div>
        <a href="/">
          <p className="text-white lg:text-[24px] text-[18px]">
            Tomasz <span className="text-secondary">Iwanicki</span>
          </p>
        </a>
        <div className="flex gap-2">
          <p className="text-white">Front-end Developer</p>
          <a href="https://github.com/TomaszIwanickiGH" target="_blank">
            <img src={images.githubLogo} alt="github" className="w-[23px] h-[23px]" />
          </a>
        </div>
      </div>
      <p className="text-lightGray text-[14px]">Copyright &copy; All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
