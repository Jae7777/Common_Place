import localFont from 'next/font/local'
import Image from 'next/image';
import LinkButton from '../LinkButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const MIB = localFont({
  src: '../../fonts/MIB.ttf',
  weight: '400',
})

const About = () => {
  return (
    <div className='text-white grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-2'>
      <div className="responsive-text-lg">
        <div className={`bg-vaporpink-600 w-1/2 py-2 px-4 ${MIB.className}`}>
          WELCOME
        </div>
        <div className='mx-auto aspect-square size-[250px] bg-vaporyellow-500 rounded-xl mt-6'>
          <div className='relative w-full h-full'>
            <Image
              src='/headshot.png'
              alt='Headshot of Christopher Poon'
              fill
              className='object-fit'
            />
          </div>
        </div>
      </div>
      <div className="responsive-text-xs">
        {`I am a sophomore student at RPI studying computer science. 
          I specialize in creating innovative and exceptional software for developing programs. 
          With a strong work ethic and a knack for communication, I have contributed in numerous projects of different sizes.
          Here is a showcase of some of my skills and projects.`}
        <div className='flex gap-3 max-w-[400px] mt-4 sm:mt-6'>
          <LinkButton
            url='https://github.com/Chriun'
            text='Github'
            icon={FaGithub}
          />
          <LinkButton
            url='https://www.linkedin.com/in/christopher-poon-1312091b5/'
            text='LinkedIn'
            icon={FaLinkedin}
          />
        </div>
      </div>
    </div>
  )
}
 
export default About;