import { github, uprightArrow } from "../assets/icons"
import Button from "./Button"
import TextButton from "./TextButton"

const ProjectCard = ({ title, tags, content, websiteLink, githubLink }) => {
  return (
    <div className="flex flex-col justify-center">
      <h4 className="text-[2rem] font-semibold leading-[1.05]">{title}</h4>
      <hr className="mt-2 w-12 border-t-2 border-black"/>
      <div className="mt-6 flex flex-wrap">
        {tags.map(tag => (
          <div key={tag} className="mr-4 mb-2 px-6 py-1 border border-opacity-50 rounded-2xl border-black font-light">{tag}</div>
        ))}
      </div>
      <p className="mt-4 info-text">{content}</p>
      <div className="mt-8 flex items-center gap-5">
        <a href={websiteLink}>
          <Button 
            label="View Website" 
            borderColor="border-black" 
            bgColor="bg-black" 
            labelColor="text-white" 
            iconURL={uprightArrow} 
            iconHeight={16} 
            iconWidth={16}/>
        </a>
        <a href={githubLink}>
          <TextButton 
            label="GitHub Link" 
            iconURL={github} 
            iconHeight={28} 
            iconWidth={28}/>
        </a>
      </div>
    </div>
    
  )
}

export default ProjectCard