import { github, uprightArrow } from "../assets/icons"
import Button from "./Button"
import TextButton from "./TextButton"

const ProjectCard = ({ title, tags, content, websiteLink, githubLink }) => {
  return (
    <div className="flex flex-col justify-center">
      <h4 className="md:text-[2rem] text-3xl font-semibold leading-[1.05]">{title}</h4>
      <hr className="mt-2 w-12 border-t-2 border-black"/>
      <div className="mt-4 flex flex-wrap">
        {tags.map(tag => (
          <div key={tag} className="mr-2 mb-2 px-4 lg:py-[2px] py-1 border md:text-sm text-xs border-opacity-50 rounded-2xl border-black font-light">{tag}</div>
        ))}
      </div>
      <p className="mt-4 info-text">{content}</p>
      <div className="mt-8 max-md:mt-6 flex items-center gap-5">
        <a href={websiteLink} rel="noopener noreferrer" target="_blank" className={`${websiteLink ? "block" : "hidden"}`}>
          <Button 
            label="View Website" 
            borderColor="border-black" 
            bgColor="bg-black" 
            labelColor="text-white" 
            iconURL={uprightArrow} 
            iconHeight={14} 
            iconWidth={14}
            hoverStyles="transition-all hover:bg-opacity-80"/>
        </a>
        <a href={githubLink} rel="noopener noreferrer" target="_blank">
          <TextButton 
            label="GitHub Link" 
            iconURL={github} 
            iconHeight={22} 
            iconWidth={22}
            hoverStyles="transition-all hover:border-b hover:border-b-slate-950"/>
        </a>
      </div>
    </div>
    
  )
}

export default ProjectCard