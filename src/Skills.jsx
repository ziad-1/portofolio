import group2 from './assets/group2.png'
export default function Skills(){
    return(
        <div className="skills mt-[150px] md:mt-[250px]">
            <div className="container mx-auto max-w-[1110px]">
                <hr className="text-white mb-16" />
                <div className="all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-start text-center md:text-start  gap-x-20 gap-y-16">
                    <div className="skill1 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">HTML</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">4 Years Experience</p>
                    </div>
                    <div className="skill2 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">CSS</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">4 Years Experience</p>
                    </div>
                    <div className="skill3 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">Javascript</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">4 Years Experience</p>
                    </div>
                    <div className="skill4 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">Accessibility</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">4 Years Experience</p>
                    </div>
                    <div className="skill5 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">React</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">3 Years Experience</p>
                    </div>
                    <div className="skill6 max-w-[345px] flex flex-col gap-3.5">
                        <p className="text-white font-bold text-[48px] leading-[56px] tracking-[-1.5px]">Sass</p>
                        <p className="text-[#D9D9D9] font-medium text-[18px] leading-[28px] tracking-[0px]">3 Years Experience</p>
                    </div>
                <img src={group2} className='absolute right-[-50px] top-[2200px] md:top-[1077px] z-10'/>
                </div>
                <hr className="block md:hidden text-white mt-16" />
            </div>
        </div>
    )
}