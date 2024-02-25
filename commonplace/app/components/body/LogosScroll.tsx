import Image from "next/image";

const skills = [
  'C', 'C++', 'Python', 'NumPy', 'OpenCV', 'ASML', 'R Studio',
  'SQL', 'Ni Multisim', 'React', 'Java',
]

interface LogosScrollprops {

}

const LogosScroll: React.FC<LogosScrollprops> = ({

}) => {  

  const logos = skills.map((skill) => {
    return (
      <li className='w-[80px] h-[80px]'>
        <div className='relative w-full h-full'>
          <Image
            src={`logos/${skill}.svg`}
            alt={`logos/${skill}.svg`}
            fill
            className='object-contain'
          />
        </div>
      </li>
    )
  })
  return (  
    <div className='py-8 w-full px-6 bg-vaporblue-500 my-12'>
        <div className="responsive-text-md">
          SKILLS
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
              [&_li]:mx-8 animate-infinite-scroll
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
     
      </div>
  );
}
 
export default LogosScroll;