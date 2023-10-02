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
    <header className={`w-full sm:px-24 px-12 sm:py-6 py-3 fixed bg-white ${isMenuVisible ? "" : "bg-opacity-50 backdrop-blur-md shadow-sm"}`}>
      <div className="max-container flex justify-between items-center relative">
        <a href="/">
          <h1 className="font-bold font-leagueSpartan text-4xl h-[35px] cursor-pointer">JPVI</h1>
        </a>

        <button type="button" onClick={handleMenuClick} className="hidden max-lg:block absolute right-[0%] z-50">
          <img 
            src={isMenuVisible ? closeMenu : hamburger}
            alt="hamburger"
            width={26}
            height={26}
            className="cursor-pointer"
          />
        </button>

        <nav>
          <ul data-visible={isMenuVisible} className="flex gap-14 text-[#585858] font-medium font-inter max-lg-nav">
              {navLinks.map((link) => (
                <li key={link.label} onClick={handleMenuClick} className="slide-left">
                  <a href={link.href}>{link.label}.</a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center xl:gap-5 max-lg:hidden">
          <div className="relative tooltip">
            <img 
              src={darkMode}
              alt="dark mode"
              width={28}
              height={28}
              className="hover:cursor-pointer max-xl:hidden"
            />
            <span className="invisible opacity-0 transition-opacity bg-[#004373] text-white font-inter font-medium text-center py-2 px-4 w-[300px] rounded-lg tooltip-text absolute z-10 -right-32 top-11 -ml-14">Dark mode under development 👨‍💻</span>
          </div>
          <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button 
              label="Hire Me" 
              bgColor="bg-black" 
              borderColor="border-black" labelColor="text-white"
            />
          </a>
        </div>
      </div>
      

      {/* <nav className="flex justify-between items-center max-container">
        <h1 className="font-bold font-leagueSpartan text-4xl h-[35px] cursor-pointer">JPVI</h1>
        <ul className="flex gap-14 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="text-[#585858] text-md font-inter">
              <a href={link.href}>{link.label}.</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center xl:gap-5 max-lg:hidden">
          <div className="relative tooltip">
            <img 
              src={darkMode}
              alt="dark mode"
              width={28}
              height={28}
              className="hover:cursor-pointer max-xl:hidden"
            />
            <span className="invisible opacity-0 transition-opacity bg-[#004373] text-white font-inter font-medium text-center py-2 px-4 w-[300px] rounded-lg tooltip-text absolute z-10 -right-32 top-11 -ml-14">Dark mode under development 👨‍💻</span>
          </div>
          <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button 
              label="Hire Me" 
              bgColor="bg-black" 
              borderColor="border-black" labelColor="text-white"
            />
          </a>
        </div>
        <button type="button" className="max-lg:block hidden">
          <img 
            src={hamburger}
            alt="hamburger"
            width={26}
            height={26}
            className="cursor-pointer"
          />
        </button>
      </nav> */}

      {/* <nav className="hamburger-menu absolute bg-white z-10 top-0 left-0 h-screen w-screen flex flex-col px-28 py-7 overflow-hidden">
        <button type="button" className="self-end">
          <img 
            src={hamburger}
            alt="hamburger"
            width={26}
            height={26}
            className="cursor-pointer"
          />
        </button>
        <ul className="mt-4 flex flex-col gap-5">
          {navLinks.map(link => (
            <li key={link}>
              <a href={link.href} className="text-[#585858] text-2xl font-inter font-semibold hover:text-[#1b4157] hover:cursor-pointer">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  )
}

export default Nav