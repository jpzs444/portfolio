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
                <p className="font-semibold text-sky-950 leading-5">On-the-Job Trainee, <span className="font-light text-sm text-black">January 2023 — April 2023</span></p>
                <ul className="mt-2">
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Managed and maintained the integrity of IPMD’s online database containing over 100 intellectual property applications authored primarily by the constituents of Bicol University; the up-to-date information enabled the technical staff to provide timely updates to clients during their transactions</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Utilized data encoding skills to process in Google Forms the 190 feedback forms collected during one of IPMD’s training/seminar events; subsequently, I conducted a client satisfaction and feedback analysis for documentation purposes</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Consolidated and documented over 50 registered intellectual property rights from the extensive records of IPMD; the consolidation allowed the office to submit an entry for an award nomination focused on research and development</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Produced 13 graphic designs, including tarpaulins and placards, using Canva as part of IPMD’s intellectual property awareness campaign; the visual materials resulted in a broader and enhanced dissemination of information throughout the colleges and campuses of Bicol University</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Facilitated a series of seminars of IPMD, took proper documentation, and assisted in operating various equipment and devices that not only contributed to the success of each event but also improved the overall experience for both participants and speakers</p>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg leading-6">SurPath Hub</p>
                <p className="font-semibold text-sky-950 leading-5">Community Moderator & Social Media Manager, <span className="font-light text-sm text-black">June 2021 — February 2022</span></p>
                <ul className="mt-2">
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Ensured a safe, harmonious, and inclusive Discord Community for SurPath Hub by utilizing moderator privileges, such as message deletion and moderation and user suspension and banning</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Managed and curated content for multiple social media accounts for SurPath Hub; successfully promoted community events and activities, resulting in increased engagement and a growing online presence</p>
                  </li>
                  <li className="flex items-start gap-1">
                    <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/><p>Practiced contributing to open source (through GitHub) by developing and integrating card components into one of the community&apos;s web pages for the 100 Days of Code challenge; the components constitute at least 25% of the page, providing valuable information about the conducted activities to members and participants</p>
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
            
            {/* Interests */}
            <div className={`info-text mt-4 ${toggleState === "Interests" ? 'block' : 'hidden'}`}>
              {info.filter(infoItem => infoItem.id === "info-4").map(interests => (
                  <ul key={interests.id} className="grid grid-cols-2 md:grid-cols-3 gap-x-3 max-md:gap-x-5">
                    {interests.content.map((interest) => (
                      <li key={interest} className="flex items-start gap-1">
                        <img src={bullet} width={12} className="inline-block opacity-20 mt-[6px]"/>{interest}
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