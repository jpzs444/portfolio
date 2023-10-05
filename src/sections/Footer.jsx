import { copyright } from "../assets/icons"
import { navLinks, socials } from "../constants"

const Footer = () => {
  return (
    <section className="max-container text-white">
      {/* For the top part: logo */}
      <a href="/" className="inline-block bg-[#ECECEC] border-0 rounded-lg">
        <h1 className="font-bold font-leagueSpartan text-4xl text-black h-[34px] mx-5 my-3">JPVI</h1>
      </a>

      <div className="mt-16 flex max-md:flex-col justify-between max-md:gap-12 font-inter">
        {/* For the left part */}
        <ul className="flex flex-col flex-wrap gap-y-4 gap-x-24 h-32 max-md:h-auto w-auto font-medium text-base">
          {navLinks.map(link => (
            <li key={link}>
              <a href={link.href} className="transition-all hover:text-gray-300">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact-me" className="transition-all hover:text-gray-300">Contact Me</a>
          </li>
        </ul>
        {/* For the right part */}
        <div>
          <div className="flex justify-end max-md:justify-start gap-7 max-md:gap-4">
            {socials.map(social => (
              <a key={social} href={social.link} className="transition-all hover:opacity-80">
                <img 
                  src={social.icon}
                  width={30}
                />
              </a>
            ))}
          </div>
          <p className="mt-7 font-light text-right max-md:text-left">Icons by <a href="https://icons8.com/" rel="noopener noreferrer" target="_blank" className="font-medium transition-all hover:text-gray-300">Icons8</a></p>
          <p className="mt-2 font-light text-right max-md:text-left">People Illustrations by <a href="https://storyset.com/" rel="noopener noreferrer" target="_blank"  className="font-medium transition-all hover:text-gray-300">Storyset</a></p>
        </div>
      </div>
      
      {/* For the bottom part: copyright */}
      <hr className="mt-11"/>
      <div className="mt-7 flex items-center">
        <img
          src={copyright} 
          width={16}
          className="max-md:self-start max-md:mt-0.5"
        />
        <p className="ml-2 font-inter text-sm">2023 Jose Paolo Indiongco. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer