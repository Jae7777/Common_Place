import { useRouter,  } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import LandingLayout from "./LandingLayout"
import ProjectLayout from "./ProjectLayout"
import Image from "next/image"
import Hero from "../body/Hero"
import { useMeasure } from "react-use"
import LogosScroll from "../body/LogosScroll"
import About from "../body/About"

interface BodyContentProps {

}

const BodyContent: React.FC<BodyContentProps> = ({

}) => {

  return (
    <div className="mt-[50px]">
      <Hero/>
      <About/>
      <div className='space-y-1 py-10'>
        <div className='h-[1px] bg-white/50'/>
        <div className='h-[1px] bg-white/50'/>
        <div className='h-[1px] bg-white/50'/>
      </div>

      <LogosScroll />

      <div className="text-white">
        <div className="responsive-text-md">
          // add & experience projects
        </div>
      </div>
    </div>
  )

  
}

export default BodyContent