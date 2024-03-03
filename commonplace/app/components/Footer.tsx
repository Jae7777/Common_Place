import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

const Footer = () => {
  return (  
    <div className={`
      ${poppins.className} fixed z-50 text-center 
      bottom-0 left-0 bg-[#171922] rounded-tr-md hover:bg-[#1b1d27]
    `}>
      <a href='https://www.flatlined.gg/' target="_blank">
        <div className="flex items-center justify-center gap-1 py-2 px-4 responsive-text-sm text-[#f5f5f5]">
          <div className="w-[20px] h-[20px]">
            <div className="relative w-full h-full">
              <Image
                src='/Flatlined.png'
                alt='Flatined'
                fill
                className="object-cover"
              />
            </div>
          </div>
          Flatlined
        </div>
      </a>
    </div>
  );
}
 
export default Footer;