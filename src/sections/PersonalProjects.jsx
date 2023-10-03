import { ProjectCard } from "../components";
import { projects } from "../constants";

const PersonalProjects = () => {
  return (
    <section className="max-container">
      {/* For the heading and intro */}
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h6 className="lg:text-base text-sm">Take a look at some of my </h6>
          <h3 className="md:text-5xl text-4xl font-semibold leading-[1.05] mt-1">Personal Projects</h3>
        </div>
        <p className="info-text text-base max-lg:text-md font-light">This section covers a number of projects that I have built on the side utilizing a variety of front-end/UI technologies, frameworks, and approaches.</p>
      </div>
      {/* For the projects and img */}
      <div>
        {projects.map(project => (
          <div 
            key={project.id}
            className="mt-24 grid max-xl:grid-cols-1 grid-cols-2 gap-16 px-32 projects-container"
          >
            <div className="w-full h-[350px] bg-gray-300 border-transparent rounded-lg project-image">
              {/*<img />*/}
            </div>
            <ProjectCard  
              title={project.title}
              tags={project.tags}
              content={project.content}
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
        
    </section>
  )
}

export default PersonalProjects