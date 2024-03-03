import Image from "next/image";
import localFont from 'next/font/local'

const MIB = localFont({
  src: '../../fonts/MIB.ttf',
  weight: '400',
})

const Hero = () => {
  return ( 
    <div>
      <div className='text-white responsive-screen-md rounded-sm '>
        <div className='w-full h-full relative' style={{boxShadow: "0 0 10px #555555"}}>
            <div className='opacity-80'>
              <Image
                src='/vaporwave.jpg'
                alt='hero'
                fill
                style={{ objectFit: 'cover'}}
              />
            </div>
            <div 
              style={{textShadow: '2px 2px 5px'}}
              className={`
                relative text-center text-white text top-1/2
                responsive-text-xl ${MIB.className} backdrop-light
            `}>
              {`YOU'RE AT THE RIGHT PLACE .`}
            </div>
          </div>
      </div>
    </div>
   );
}
 
export default Hero;