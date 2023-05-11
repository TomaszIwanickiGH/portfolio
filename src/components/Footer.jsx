import React from 'react'
import { styles } from '../constants'

const Footer = () => {
  return (
    <footer className={`${styles.paddingFooter} flex md:flex-row flex-col gap-12 items-center justify-between bg-primary`}>
      <div>
        <a href="/">
          <p className="text-white lg:text-[24px] text-[18px]">
            Tomasz <span className="text-secondary">Iwanicki</span>
          </p>
        </a>
        <p className="text-white">Front-end Developer</p>
      </div>
      <div className="md:text-start text-center">
        <p className="text-lightGray lg:block hidden">
          <span className="text-white font-bold">Contact me</span> through the form showed above or:
        </p>
        <p className="text-lightGray">
          Tel: <span className="font-bold text-white ml-2"> 794 478 594</span>
        </p>
        <p className="text-lightGray">
          Email:<span className="font-bold text-white ml-2"> tomasz.iwanicki@onet.pl</span>
        </p>
      </div>
      <p className="text-lightGray text-[14px]">Copyright &copy; All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
