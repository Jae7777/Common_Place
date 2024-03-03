import Image from "next/image";
import { IoPause, IoPlay } from "react-icons/io5";

interface ExperienceCardProps {
  imgsrc?: string | null
  imgalt?: string | null
  title?: string | null
  description?: string | null
  startDate?: string | null
  endDate?: string | null
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imgsrc,
  imgalt,
  title,
  description,
  startDate,
  endDate
}) => {
  return ( 
    <div className="flex w-full py-8">
      <div className="aspect-square size-[200px]">
        <div className='w-full h-full relative'>
          <Image
            src={imgsrc || ''}
            alt={imgalt || ''}
            fill 
            className="object-cover"
          />
        </div>
      </div>
      <div className=" px-6 py-8">
        <div className="text-white responsive-text-lg font-semibold">
          {title}
        </div>
        <div className='text-neutral-300 responsive-text-xs pt-3'>
          {description}
        </div>
        <div className='
          flex text-white font-bold responsive-text-xs pt-3
          gap-3 items-center
        '>
          <div className="flex items-center gap-1">
            <IoPlay

            />
            {startDate}
          </div>
          -
          <div className="flex items-center gap-1">
            {endDate}
            <IoPause

            />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ExperienceCard;