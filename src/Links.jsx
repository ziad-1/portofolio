import github from './assets/akar-icons_github-fill.svg'
import mentor from './assets/simple-icons_frontendmentor.svg'
import linkedin from './assets/LinkedIn.svg'
import twitter from './assets/akar-icons_twitter-fill.svg'
export default function Links() {
  return (
    <div className="links bg-[#242424] ">
        <hr className='text-white max-w-[1110px] mx-auto '/>
      <div className="container flex flex-col md:flex-row gap-5 items-center justify-between mx-auto max-w-[1110px] pt-12 pb-10">
        <p className='text-white " font-bold text-[32px] leading-[32px] tracking-[-0.44px]" z-10 '>
          adamkeyes
        </p>
        <nav className="flex items-center gap-8 z-10">
          <img src={github} className="w-[23px] h-[23px] cursor-pointer" />
          <img src={mentor} className="w-[23px] h-[23px] cursor-pointer" />
          <img src={linkedin} className="w-[23px] h-[23px] cursor-pointer" />
          <img src={twitter} className="w-[23px] h-[23px] cursor-pointer" />
        </nav>
      </div>
    </div>
  );
}
