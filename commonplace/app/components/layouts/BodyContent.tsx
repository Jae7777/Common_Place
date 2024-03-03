import { useRouter,  } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import LandingLayout from "./LandingLayout"
import ProjectLayout from "./ProjectLayout"
import Image from "next/image"
import Hero from "../body/Hero"
import { useMeasure } from "react-use"
import LogosScroll from "../body/LogosScroll"
import About from "../body/About"
import LineBreak from "../body/LineBrake"

interface BodyContentProps {

}

const BodyContent: React.FC<BodyContentProps> = ({

}) => {

  return (
    <div className="mt-[50px]">
      <Hero/>
      <LineBreak/>
      <About/>
      <LineBreak/>

      <LogosScroll />

      <div className="text-white">
        <div className="responsive-text-md">
          // add & experience projects
        </div>
      <SectionHeader
        text="EXPERIENCES"
      />
      
      <ExperienceCard
        imgsrc='/experience/Kings Bay Y.png'
        imgalt='Kings Bay Y'
        title='Kings Bay Y'
        description=''
        startDate='07/2023'
        endDate='08/2023'
      />
      <ExperienceCard
        imgsrc='/experience/Gifted Reading and Math Center.jpg'
        imgalt='Gifted Reading and Math Center'
        title='Gifted Reading and Math Center'
        description=''
        startDate='09/2019'
        endDate='07/2022'
      />
      
      <SectionHeader
        text="Projects"
      />
      </div>
    </div>
  )

  
}

export default BodyContent