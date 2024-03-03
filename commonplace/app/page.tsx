'use client'

import SideBar from "./components/sidebar/Sidebar";
import { useState } from "react";
import { Fira_Code } from "next/font/google";
import Hero from "./components/body/Hero";
import LineBreak from "./components/body/LineBrake";
import About from "./components/body/About";
import LogosScroll from "./components/body/LogosScroll";
import SectionHeader from "./components/body/SectionHeader";
import ExperienceCard from "./components/body/ExperienceCard";
import ProjectCard from "./components/body/ProjectCard";

const hero = Fira_Code({
  subsets: ['latin'],
  weight: ['500']
})

export default function Home({ 
  searchParams 
}: {
  searchParams: { [key: string]: string | undefined}
}) {
  return (
    <div className='pt-[60px] mx-12'>
      <Hero/>
      <LineBreak/>
      <About/>
      
      <div className='
        responsive-screen-sm my-8 bg-cover bg-fixed bg-center bg-no-repeat
      '
        style={{backgroundImage: 'url("/scroll.jpg")'}}
      >
      </div>

      <LogosScroll />

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
      <div className="
        grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6
      ">
        <ProjectCard
          header="IBM Ceph"
          url='/project/IBM Ceph.jpg'
          alt='IBM Ceph'
        />
        <ProjectCard
          header="MIPS Simulator in C"
          url='/project/MIPS Simulator in C.png'
          alt='MIPS Simulator in C'
        />  
        <ProjectCard
          header="Animal Genome Size Dataset"
          url='/project/Animal Genome Size Dataset.png'
          alt='Animal Genome Size Dataset'
        />  
        <ProjectCard
          header="State Machine Circuit"
          url='/project/State Machine Circuit.webp'
          alt='State Machine Circuit'
        />  
        <ProjectCard
          header="World Happiness VS Cost of Living Index"
          url='/project/World Happiness VS Cost of Living Index.jpg'
          alt='World Happiness VS Cost of Living Index'
        />         
      </div>
    </div>
  );
}
