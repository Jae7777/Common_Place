import localFont from 'next/font/local'

const MIB = localFont({
  src: '../../fonts/MIB.ttf',
  weight: '400',
})

const About = () => {
  return <div className='text-white grid grid-cols-1 sm:grid-cols-2 gap-y-3'>
    <div className="responsive-text-lg">
      <div className={`bg-vaporpink-600 w-1/2 py-2 px-4 ${MIB.className}`}>
        WELCOME
      </div>
    </div>
    <div className="responsive-text-xs">
      {`I am a sophomore student at RPI studying computer science. 
        I specialize in creating innovative and exceptional software for developing programs. 
        With a strong work ethic and a knack for communication, I have contributed in numerous projects of different sizes.
        Here is a showcase of some of my skills and projects.`}
    </div>
  </div>
}
 
export default About;