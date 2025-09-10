let styles = {
  textDecoration: "underline",
  textDecorationColor: "#4EE1A0",
  textUnderlineOffset: "20px",
};
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
export default function Projects() {
  return (
    <div className="Projects mt-36">
      <div className="container mx-auto max-w-[1110px]">
        <div className="upper flex items-center justify-evenly md:justify-between">
          <p className="text-white font-bold text-[40px] md:text-[88px] leading-[40px] m:leading-[88px] tracking-[-1.14px] m:tracking-[-2.5px]">
            Projects
          </p>
          <a
            className="text-[#FFFFFF] font-bold text-[16px] leading-[26px] tracking-[2.29px] cursor-pointer hover:text-[#4EE1A0]"
            style={styles}
          >
            CONTACT ME
          </a>
        </div>
        <div className="lower mt-20 grid grid-cols-1 md:grid-cols-2  place-items-center md:place-items-start gap-x-10 gap-y-16">
          <div className="project1 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project1}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60 group-active:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] active:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] active:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              DESIGN PORTFOLIO
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="project2 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project2}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              E-LEARNING LANDING PAGE
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="project3 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project3}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              TODO WEB APP
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                JAVASCRIPT
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="project4 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project4}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              ENTERTAINMENT WEB APP
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                JAVASCRIPT
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="project5 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project5}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              MEMORY GAME
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                JAVASCRIPT
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="project6 w-[90%] md:w-[540px] flex flex-col gap-3.5 relative group">
            <img
              src={project6}
              alt="Project"
              className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-60"
            />
            <div className="absolute top-[-70px] inset-0 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW PROJECT
              </button>
              <button className="text-white font-bold text-[16px] border-b-4 border-[#4EE1A0] px-4 py-2 hover:text-[#4EE1A0] cursor-pointer">
                VIEW CODE
              </button>
            </div>
            <p className="text-white font-bold text-[24px] leading-[32px] tracking-[] mt-3">
              ART GALLERY SHOWCASE
            </p>
            <div className="languages flex items-center gap-5 mt-2">
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                HTML
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                CSS
              </p>
              <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[]">
                JAVASCRIPT
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
