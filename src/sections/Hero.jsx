import { forwardButton } from "../assets/icons";
import { heroIllustration } from "../assets/images";
import { Button, TextButton } from "../components";

const Hero = () => {
  return (
    <section className="max-container grid max-xl:grid-cols-1 grid-cols-2 gap-16 max-xl:gap-14">
      {/* For the first col: text */}
      <div className="flex flex-col my-auto">
        <h6 className="lg:text-base text-sm">Hello! My name is </h6>
        <h1 className="2xl:text-[3.9rem] lg:text-[3rem] md:text-6xl max-md:text-4xl font-semibold leading-[1.05] mt-1">Jose Paolo Indiongco.<span className="block info-gradient">Front-End Developer</span></h1>
        <p className="info-text text-base max-lg:text-md font-light mt-8 max-md:mt-6 w-[80%] max-md:w-[100%]">I am an Information Technology graduate from the Philippines—eager to build simple to complex web development projects. Ever since freshman year in college, I have found myself becoming passionate about the wonders of front-end development and UI/UX Design. </p>
        <p className="info-text text-base max-lg:text-md font-light mt-8 max-md:mt-6 w-[80%] max-md:w-[100%]">I believe that <span className="font-medium">adding functionality to aesthetics</span> significantly <span className="font-medium">boosts the credibility and engagement</span> of websites and web applications.</p>

        <div className="mt-11 max-md:mt-9 flex justify-start items-center gap-5">
          <a href="#projects">
            <Button 
              label="View My Projects" 
              bgColor="bg-white" 
              borderColor="border-black" 
              labelColor="text-black"
            />
          </a>
          <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer">
            <TextButton 
              label="Hire Me" 
              iconURL={forwardButton} 
              iconHeight={16} 
              iconWidth={16}/>
          </a>
        </div>
      </div>
      {/* For the second col: img */}
      <div className="flex justify-center">
        <img 
          src={heroIllustration}
          className="/*w-[90%]*/ /*w-full max-lg:w-[80%]*/ w-[75%] max-md:w-[100%] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero