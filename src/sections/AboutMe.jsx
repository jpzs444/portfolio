import { aboutIllustration } from "../assets/images";
import { info } from "../constants";
import { TabButton } from "../components";
import { useState } from "react";
import { bullet } from "../assets/icons";

const AboutMe = () => {

  const [toggleState, setToggleState] = useState("Education")

  return (
    <section className="max-container">
      {/* For the heading and intro */}
      <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-5">
        <div>
          <h6 className="lg:text-base text-sm">Know more </h6>
          <h3 className="md:text-5xl text-4xl font-semibold leading-[1.05] mt-1">About Me</h3>
        </div>
        <p className="info-text text-base max-lg:text-md font-light">This section presents an overview of my personal background, education, hobbies, skills, and experience during my collegiate years.</p>
      </div>
      <div className="mt-16 max-md:mt-14 grid max-xl:grid-cols-1 grid-cols-2 gap-16 max-md:gap-8">
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
          {/* For the tab buttons */}
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
          
          {/* For the tab contents */}
          <div className="pt-4">
            {/* Education */}
            <div className={`info-text mt-4 ${toggleState === "Education" ? 'flex flex-col gap-5' : 'hidden'}`}>
              <p>Growing up surrounded by diligent relatives and friends has shaped me into an individual who highly values academic excellence—this mindset served as my compass during my four years in college which allowed me to obtain numerous academic achievements.</p>
              <p>I consistently earned recognition as a Dean&apos;s Lister and was honored as a President&apos;s Lister for two academic years. I also attained recognition from the <a href="https://www.facebook.com/bubfs" rel="noopener noreferrer" target="_blank" className="font-semibold hover:text-[#2a407c] hover:transition-all">Bicol University Order of the Blue Feather Society</a>, the official honor society of Bicol University, for being one of the top-performing students in the College of Science for two consecutive semesters. In addition to these accolades, I successfully maintained my Merit Scholarship from the <a href="https://sei.dost.gov.ph/index.php/programs-and-projects/scholarships/undergraduate-scholarships#s-t-undergraduate-scholarships" rel="noopener noreferrer" target="_blank" className="font-semibold hover:text-[#2a407c] hover:transition-all">DOST-SEI Scholarship Program</a> throughout college.</p>
              <p>Having recently graduated from <a href="https://bicol-u.edu.ph/" rel="noopener noreferrer" target="_blank" className="font-semibold hover:text-[#2a407c] hover:transition-all">Bicol University</a> with a Bachelor of Science in Information Technology, I am now eager to unfold the next chapter of my career journey as a Frontend Web Developer.</p>
            </div>
            
            {/* Experience */}
            <div className={`info-text mt-4 ${toggleState === "Experience" ? 'flex flex-col gap-8' : 'hidden'}`}>
              <div>
                <p className="font-semibold text-lg leading-6">BU Intellectual Property Management Division (IPMD)</p>
                <p className="font-semibold text-sky-950 leading-5">On-the-Job Trainee, <span className="font-light text-sm text-black">February 2023 — April 2023</span></p>
                <ul className="mt-2">
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Updated regularly the records of IPMD&apos;s online database with Google Sheets containing over 100 IP applications (e.g., trademarks, copyrights, patents, utility models, and industrial designs) authored largely by the faculty and students of Bicol University</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Encoded 190 filled-out feedback forms from one of IPMD&apos;s trainings/seminars and further made a client satisfaction and feedback analysis for documentation purposes</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Designed 2 tarpaulins and 11 placards using Canva for IPMD&apos;s IP Awareness Campaign in the different colleges and campuses of Bicol University</p>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg leading-6">SurPath Hub</p>
                <p className="font-semibold text-sky-950 leading-5">Community Moderator & Social Media Manager, <span className="font-light text-sm text-black">June 2021 — February 2022</span></p>
                <ul className="mt-2">
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Ensured that the SurPath Hub&apos;s Discord community was a safe and healthy space for all its members</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Handled several social media accounts (e.g., Facebook, Twitter, and Instagram) of SurPath Hub and posted various content to promote the community&apos;s activities and uphold its online presence</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className={`info-text mt-4 ${toggleState === "Skills" ? 'flex flex-col gap-5' : 'hidden'}`}>
              {info.filter(infoItem => infoItem.id === "info-3").map(skills => (
                <div key={skills} className="grid grid-cols-2">
                  <div>
                    <p className="font-semibold">Hard Skills:</p>
                      {skills.content.filter(content => content.label === "Hard Skills").map(hardSkills => (
                        <ul key={hardSkills} className="2xl:grid 2xl:grid-cols-2 mt-2">
                          {hardSkills.skills.map(skill => (
                            <li key={skill} className="flex items-start gap-1">
                              <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/>{skill}
                            </li>
                          ))}
                        </ul>
                      ))}
                  </div>
                  
                  <div>
                    <p className="font-semibold">Soft Skills:</p>
                    {skills.content.filter(content => content.label === "Soft Skills").map(softSkills => (
                      <ul key={softSkills} className="2xl:grid 2xl:grid-cols-2 mt-2">
                        {softSkills.skills.map(skill => (
                          <li key={skill} className="flex items-start gap-1">
                            <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/>{skill}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Hobbies */}
            <div className={`info-text mt-4 ${toggleState === "Hobbies" ? 'block' : 'hidden'}`}>
              {info.filter(infoItem => infoItem.id === "info-4").map(hobbies => (
                  <ul key={hobbies.id} className="hobbies grid grid-cols-2 md:grid-cols-3 gap-x-3 max-md:gap-x-5">
                    {hobbies.content.map((hobby) => (
                      <li key={hobby} className="flex items-start gap-1">
                        <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/>{hobby}
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe