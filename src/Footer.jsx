import group from './assets/Group 26.png'

export default function Footer() {
  return (
    <div className="footer pt-20 mt-32 bg-[#242424] pb-24">
      <div className="container mx-auto max-w-[1110px] flex flex-col lg:flex-row justify-between">
        <div className="left max-w-[445px] flex flex-col gap-9">
          <p className="text-white font-bold text-[40px] md:text-[88px] leading-[40px] md:leading-[88px] tracking-[-1.14px] md:tracking-[-2.5px] text-center md:text-start">
            Contact
          </p>
          <p className="text-[#D9D9D9] font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[28px] text-center md:text-start ml-6 md:ml-0">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="right max-w-[445px] flex flex-col gap-8 w-[90%] mx-auto mt-12 md:mt-0">
          <div className="w-full mx-auto">
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  className="text-[#D9D9D9] font-medium text-[16px] leading-[26px] tracking-[-0.22px]"
                  htmlFor="name"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full p-2 border-b-2 border-[#D9D9D9] bg-transparent outline-none focus:border-b-2 focus:border-[#4EE1A0]"
                  type="text"
                />
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label
                  className="text-[#D9D9D9] font-medium text-[16px] leading-[26px] tracking-[-0.22px]"
                  htmlFor="email"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full p-2 border-b-2 border-[#D9D9D9] bg-transparent outline-none focus:border-b-2 focus:border-[#4EE1A0]"
                  type="email"
                />
              </div>
              {/* Message Field */}
              <div className="mb-4">
                <label
                  className="text-[#D9D9D9] font-medium text-[16px] leading-[26px] tracking-[-0.22px]"
                  htmlFor="message"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border-b-2 border-[#D9D9D9] bg-transparent outline-none focus:border-b-2 focus:border-[#4EE1A0]"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="border-b-4 border-b-[#4EE1A0] cursor-pointer pb-2.5 ml-[289px] md:ml-[298px] "
                >
                  <p className="text-white font-bold text-[16px] leading-[26px] tracking-[2.29px] hover:text-[#4EE1A0]">
                    SEND MESSAGE
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <img src={group} className='absolute top-[3500px] z-10' />
    </div>
  );
}
