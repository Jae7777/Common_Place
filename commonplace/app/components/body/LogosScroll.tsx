import localFont from 'next/font/local'
import Image from "next/image";

const skills = [
  'C', 'C++', 'Python', 'NumPy', 'OpenCV', 'ASML', 'R Studio',
  'SQL', 'Ni Multisim', 'React', 'Java',
]

const MIB = localFont({
  src: '../../fonts/MIB.ttf',
  weight: '400',
})

interface LogosScrollprops {

}

const LogosScroll: React.FC<LogosScrollprops> = ({

}) => {  

  const logos = skills.map((skill, index) => {
    return (
      <div key={index} className='w-[80px] h-[80px] mx-6'>
        <div className='relative w-full h-full'>
          <Image
            src={`logos/${skill}.svg`}
            alt={`Logo for ${skill}`}
            fill
            className='object-contain'
          />
        </div>
      </div>
    )
  })

  return (  
    <div className='py-8 w-full px-6'>
      <div className={`responsive-text-2xl text-center ${MIB.className} text-white`}>
        SHOWCASE
      </div>
      <div 
        className="
          w-full inline-flex flex-nowrap gap-3 mt-6
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]
        "
      >  

        <ul 
          className="
            flex items-center justify-center md:justify-start 
             animate-infinite-scroll
            [&_img]:max-w-none
          "
        >
          {logos}
        </ul>

        <ul 
          className="
            flex items-center justify-center md:justify-start 
            [&_li]:mx-8 animate-infinite-scroll
            [&_img]:max-w-none
          " 
          aria-hidden="true"
        >
          {logos}
        </ul>
          
      </div>

      <div className='w-full h-[75px] cityLine ' />

    </div>
  );
}
 
export default LogosScroll;