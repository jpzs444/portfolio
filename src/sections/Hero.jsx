import { forwardButton } from "../assets/icons";
import { heroIllustration } from "../assets/images";
import { Button, TextButton } from "../components";

const Hero = () => {
  return (
    <section className="max-container grid max-xl:grid-cols-1 grid-cols-2 gap-16">
      {/* For the first col: text */}
      <div className="flex flex-col max-lg:items-center max-lg:text-center">
        <h6 className="lg:text-lg text-md">Hello! My name is </h6>
        <h1 className="lg:text-[4.063rem] text-[3.9rem] font-semibold leading-[1.05] mt-1">Jose Paolo Indiongco.<span className="block info-gradient">Front-End Developer</span></h1>
        <p className="info-text max-lg:text-lg font-light mt-8 w-[80%]">I am an Information Technology graduate from the Philippines—eager to build simple to complex web development projects. Ever since freshman year in college, I have found myself becoming passionate about the wonders of front-end development and UI/UX Design. </p>
        <p className="info-text max-lg:text-lg font-light mt-8 w-[80%]">I believe that <span className="font-medium">adding functionality to aesthetics</span> significantly <span className="font-medium">boosts the credibility and engagement</span> of websites and web applications.</p>

        <div className="mt-11 flex justify-start items-center gap-5">
          <a href="#projects">
            <Button 
              label="View My Projects" 
              bgColor="bg-white" 
              borderColor="border-black" 
              labelColor="text-black"
            />
          </a>
          <a href="#contact-me">
            <TextButton 
              label="Hire Me" 
              iconURL={forwardButton} 
              iconHeight={22} 
              iconWidth={22}/>
          </a>
        </div>
      </div>
      {/* For the second col: img */}
      <div className="flex max-lg:justify-center">
        <img 
          src={heroIllustration}
          className="w-full /*w-[90%]*/ max-lg:w-[80%] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero