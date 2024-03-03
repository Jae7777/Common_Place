import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { IconType } from "react-icons"

interface LinkButtonProps {
  url: string
  text: string
  icon?: IconType | null
}

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  text,
  icon: Icon
}) => {
  return (
    <div className='button-1'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <div className="flex gap-1 items-center">
          {Icon && <Icon/>}
          {text}
        </div>
      </a>
    </div>
  )
}

export default LinkButton