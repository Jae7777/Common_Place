'use client'

import { redirect, useRouter } from "next/navigation"
import { FaGithub, FaHouse, FaLinkedinIn } from "react-icons/fa6"
import EmailIcon from "./EmailIcon"
import { BsFire } from "react-icons/bs"

const Navbar = () => {
  const router = useRouter()
  const email = 'jchen4086@gmail.com'

  return (
    <div className='absolute w-full z-50 h-[50px] text-center bg-transparent'>
      <div onClick={() => {router.push('/')}} className='
        h-full mx-auto flex
        items-center justify-center
      '>
        <div onClick={() => {router.push('/')}} className='
          clickable-dark
        '>
          <BsFire
            className='navbar-item'
            color='#ff86c9'
          />
        </div>

        <div className='absolute right-8'>
          <div className='flex flex-row gap-3'>
            <EmailIcon email={email} />
            <a href='https://www.linkedin.com/in/justin-chen-b27bb324b/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn
                className='navbar-item clickable-dark'
                color='#ff86c9'
              />
            </a>
            <a href='https://github.com/Jae7777' target='_blank' rel='noopener noreferrer'>
              <FaGithub
                className='navbar-item clickable-dark'
                color='#ff86c9'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar