interface SectionHeaderProps {
  text: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text
}) => {
  return (  
    <div className="
      responsive-text-md text-white border-[1px] border-white
      px-4 py-2 font-bold
    ">
      {text}
    </div>
  );
}
 


export default SectionHeader;