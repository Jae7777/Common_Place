import Image from "next/image";

interface ProjectCardProps {
  url: string,
  alt: string,
  header: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  alt,
  header
}) => {
  return ( 
    <div className="aspect-sqaure mx-auto my-12 size-[225px]">
      <div className='
        text-white bg-vaporviolet-500 absolute z-50
        px-2 py-1
      '>
        <div className="flex-1 flex min-w-[120px] max-w-[200px]">
          {header}
        </div>
      </div>
      <div className='w-full h-full relative'>
        <Image
          src={url}
          alt={alt}
          fill 
          className="object-cover"
        />
      </div>
    </div>
  );
}
 
export default ProjectCard;