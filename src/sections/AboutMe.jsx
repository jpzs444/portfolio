import { aboutIllustration } from "../assets/images";
import { info } from "../constants";
import { TabButton } from "../components";
import { useState } from "react";

const AboutMe = () => {

  const [toggleState, setToggleState] = useState("Background")

  return (
    <section className="max-container">
      {/* For the heading and intro */}
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h6 className="lg:text-base text-sm">Know more </h6>
          <h3 className="md:text-5xl text-4xl font-semibold leading-[1.05] mt-1">About Me</h3>
        </div>
        <p className="info-text text-base max-lg:text-md font-light">This section presents an overview of my personal background, education, and experience during my collegiate years.</p>
      </div>
      <div className="mt-16 grid max-xl:grid-cols-1 grid-cols-2 gap-16">
        {/* For the first col: img */}
        <div>
          <img 
            src={aboutIllustration}
            width={534}
            height={391}
            className="w-full"
          />
        </div>
        {/* For the second col: text */}
        <div>
          {/* WORKING */}
          <div className="grid grid-cols-4 tab-group-scroll">
            {info.map((item) => (
              <TabButton 
                key={item.id}
                label={item}
                activeTab={toggleState}
                changeActiveTab={(item) => setToggleState(item)}
              />
            ))}
          </div>
          
          {/* WORKING */}
          <div className="pt-4">
            {info.map((item) => (
              <div key={item.id}>
                {item.content.map((contentItem) => (
                  <p 
                    key={contentItem} 
                    className={`info-text mt-8 ${toggleState === item.title ? 'block' : 'hidden'}`}>
                    {contentItem}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe