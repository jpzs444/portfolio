import { send } from "../assets/icons"
import { Button } from "../components"

const ContactMe = () => {
  return (
    <section className="max-container">
      {/* For the heading and intro */}
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h6 className="lg:text-lg text-md">Want to connect or say hi? </h6>
          <h3 className="lg:text-5xl text-[3.9rem] font-semibold leading-[1.05] mt-1">Contact Me</h3>
        </div>
        <p className="info-text font-light">You may send me an email using the form below or get in touch with me through my socials: <a href="https://www.facebook.com/jp.indiongco" target="_blank" rel="noreferrer" className="font-medium">Facebook</a>, <a href="https://twitter.com/jpzs444" target="_blank" rel="noreferrer" className="font-medium">X</a>, or <a href="https://www.linkedin.com/in/jpindiongco/" target="_blank" rel="noreferrer" className="font-medium">LinkedIn</a>.</p>
      </div>
      {/* For the contact form */}
      <form className="mt-16 px-32 info-text">
        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-8">
          {/* For the left column */}
          <div>
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-medium">
                Name <span className="text-[#890000]">*</span>
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 rounded-lg shadow-sm text-gray-700 px-3 py-1.5 text-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#515B60] focus:outline-none"
                />
              </div>
            </div>
            {/* Email */}
            <div className="mt-8">
              <label htmlFor="email" className="font-medium">
                Email Address <span className="text-[#890000]">*</span>
              </label>
              <div className="mt-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border-0 rounded-lg shadow-sm text-gray-700 px-3 py-1.5 text-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#515B60] focus:outline-none"
                />
              </div>
            </div>
            {/* Subject */}
            <div className="mt-8">
              <label htmlFor="subject" className="font-medium">
                Subject
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full border-0 rounded-lg shadow-sm text-gray-700 px-3 py-1.5 text-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#515B60] focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* For the right column */}
          {/* Message */}
          <div>
            <label htmlFor="message" className="font-medium">
              Message <span className="text-[#890000]">*</span>
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
      </form>
    </section>
  )
}

export default ContactMe