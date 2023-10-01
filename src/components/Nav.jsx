import { navLinks } from "../constants";
import { darkMode, hamburger } from "../assets/icons";
import { Button } from "../components";

const Nav = () => {
  return (
    <header className="w-full sm:px-24 px-12 sm:py-6 py-3 /*fixed*/">
      <nav className="flex justify-between items-center max-container">
        <h1 className="font-bold font-leagueSpartan text-4xl h-[35px] cursor-pointer">JPVI</h1>
        <ul className="flex gap-14 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="text-[#585858] text-lg">
              <a href={link.href}>{link.label}.</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-5 max-lg:hidden">
          <img 
            src={darkMode}
            alt="dark mode"
            width={26}
            height={26}
            className="cursor-pointer"
          />
          <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button 
              label="Hire Me" 
              bgColor="bg-black" 
              borderColor="border-black" labelColor="text-white"
            />
          </a>
        </div>
        <div className="max-lg:block hidden">
          <img 
            src={hamburger}
            alt="hamburger"
            width={26}
            height={26}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav