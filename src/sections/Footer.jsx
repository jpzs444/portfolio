import { copyright } from "../assets/icons"
import { navLinks, socials } from "../constants"

const Footer = () => {
  return (
    <section className="max-container text-white">
      {/* For the top part: logo */}
      <a href="#" className="inline-block bg-[#ECECEC] border-0 rounded-lg">
        <h1 className="font-bold font-leagueSpartan text-4xl text-black h-[34px] mx-5 my-3">JPVI</h1>
      </a>

      <div className="mt-16 flex justify-between font-inter">
        {/* For the left part */}
        <ul className="flex flex-col flex-wrap gap-y-4 gap-x-24 h-32 max-md:h-auto w-auto font-medium text-xl">
          {navLinks.map(link => (
            <li key={link}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
          <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
        {/* For the right part */}
        <div>
          <div className="flex gap-7">
            {socials.map(social => (
              <a key={social} href={social.link}>
                <img 
                  src={social.icon}
                  width={40}
                />
              </a>
            ))}
          </div>
          <p className="mt-7 font-light text-right">Icons by <a href="https://icons8.com/" className="font-medium">Icons8</a></p>
          <p className="mt-2 font-light text-right">People Illustrations by <a href="https://storyset.com/" className="font-medium">Storyset</a></p>
        </div>
      </div>
      
      {/* For the bottom part: copyright */}
      <hr className="mt-11"/>
      <div className="mt-7 flex max-md:justify-center items-center">
        <img
          src={copyright} 
          width={24}
        />
        <p className="ml-2 font-inter">2023 Jose Paolo Indiongco. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer