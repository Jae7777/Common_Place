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
      
      <SectionHeader
        text="Projects"
      />
      </div>
    </div>
  )

  
}

export default BodyContent