// import { send } from "../assets/icons"
// import { Button, FormInput } from "../components"
// import { inputFields } from "../constants"

import { email } from "../assets/icons"
import { Button } from "../components"

const ContactMe = () => {
  return (
    <section className="max-w-3xl mx-auto my-0 p-20 /*bg-[#FBFBFB] rounded-3xl shadow-sm*/">
      {/* For the heading and intro */}
      <div className="flex flex-col items-center gap-7">
        <div>
          <h6 className="lg:text-lg text-md text-center">Want to connect?</h6>
          <h3 className="lg:text-5xl text-[3.9rem] font-medium leading-[1] text-center mt-1">Let&apos;s Work Together</h3>
        </div>
        <p className="max-w-lg font-inter text-[#1D1D1D] text-xl font-light text-center">You may send me an email or get in touch with me through my socials: <a href="https://www.facebook.com/jp.indiongco" target="_blank" rel="noopener noreferrer" className="font-medium">Facebook</a>, <a href="https://twitter.com/jpzs444" target="_blank" rel="noopener noreferrer" className="font-medium">X</a>, or <a href="https://www.linkedin.com/in/jpindiongco/" target="_blank" rel="noopener noreferrer" className="font-medium">LinkedIn</a>.</p>

        <a href="mailto:josepaolo.indiongco@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-3">
          <Button 
          label="Contact Me"
          bgColor="bg-black"
          borderColor="border-black"
          labelColor="text-white"
          iconURL={email}
          iconWidth={19}
          // iconHeight={}
          />
        </a>
      </div>
      

      {/* For the contact form */}
      {/* <form className="mt-16 px-32 info-text">
        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-8">
          
          <div className="flex flex-col gap-8">
            {inputFields.map(field => (
              <FormInput key={field} {...field}/>
            ))}
          </div>
          
          <div>
            <label htmlFor="message" className="font-medium">
              Message<span className="text-[#890000]"> *</span>
            </label>
            <div className="mt-3">
              <textarea
                name="message"
                id="message"
                rows={9}
                className="block w-full border-0 rounded-lg shadow-sm text-gray-700 px-3 py-1.5 text-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#515B60] focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex justify-end">
          <Button 
            label="Send Email" 
            bgColor="bg-black"
            borderColor="bg-black"
            labelColor="text-white"
            iconURL={send}
            iconWidth={16}
            iconHeight={16}
            buttonType="submit"
          />
        </div>
      </form> */}
    </section>
  )
}

export default ContactMe