import { navLinks } from "../constants";
import { closeMenu, darkMode, hamburger } from "../assets/icons";
import { Button } from "../components";
import { useState, useEffect } from "react";

const Nav = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    if (isMenuVisible === false) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  }

  useEffect(() => {
    if (isMenuVisible) {
      document.body.classList.add('menu-ios-open');
    } else {
      document.body.classList.remove('menu-ios-open');
    }
  }, [isMenuVisible]);


  return (
    <header className={`w-full sm:px-24 px-5 sm:py-3 py-3 fixed bg-white ${isMenuVisible ? "" : "bg-opacity-50 backdrop-blur-md shadow-sm"}`}>
      <div className="max-container flex justify-between items-center relative">
        <a href="/">
          <h1 className="font-bold font-leagueSpartan text-4xl h-[35px] cursor-pointer">JPVI</h1>
        </a>

        <button type="button" onClick={handleMenuClick} className="hidden max-lg:block absolute right-[0%] z-50">
          <img 
            src={isMenuVisible ? closeMenu : hamburger}
            alt="hamburger"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </button>

        <nav>
          <ul data-visible={isMenuVisible} className="flex gap-14 text-[#000000] text-sm font-inter max-lg-nav z-50">
              {navLinks.map((link) => (
                <li 
                  key={link.label} 
                  onClick={handleMenuClick}>
                  <a 
                    href={link.href} rel={link.rel} target={link.target} className="transition-all hover:bg-slate-100 p-2 hover:rounded-md"
                    >{link.label}.</a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center xl:gap-5 max-lg:hidden">
          <div className="relative tooltip">
            <img 
              src={darkMode}
              alt="dark mode"
              width={25}
              height={25}
              className="hover:cursor-not-allowed max-xl:hidden"
            />
            <span className="invisible opacity-0 transition-opacity bg-[#004373] text-white font-inter text-sm font-medium text-center py-2 px-3.5 w-[260px] rounded-lg tooltip-text absolute z-10 -right-32 top-11 -ml-14">Dark mode under development 👨‍💻</span>
          </div>
          <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button 
              label="Hire Me" 
              bgColor="bg-black" 
              borderColor="border-black" labelColor="text-white"
              paddingY="py-[6px]"
              paddingX="px-[23px]"
              hoverStyles="transition-all hover:bg-opacity-80 hover:border-opacity-80"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Nav