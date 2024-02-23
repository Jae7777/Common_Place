import { useRouter,  } from "next/navigation"
import { useEffect, useState } from "react"
import LandingLayout from "./LandingLayout"
import ProjectLayout from "./ProjectLayout"
import Image from "next/image"
import Hero from "../body/Hero"

interface BodyContentProps {

}

const BodyContent: React.FC<BodyContentProps> = ({

}) => {
  return (
    <div className="mt-[50px]">
      <Hero/>
      <div className='text-white pt-10 grid grid-cols-1 sm:grid-cols-2'>
        <div className="responsive-text-md">
          WELCOME
        </div>
        <div className="responsive-text-xs">
          {`I am a sophomore student at RPI studying computer science. 
          I specialize in creating innovative and exceptional software for developing programs. 
          With a strong work ethic and a knack for communication, I have contributed in numerous projects of different sizes.
          Here is a showcase of some of my skills and projects.`}
        </div>
      </div>

      <div className='h-[100px] w-full bg-white my-12'>
asd
      </div>
     
      <div className="text-white pt-10">
        <div className="">
          Recent Projects
        </div>
      </div>
        
    </div>
  )
}

export default BodyContent