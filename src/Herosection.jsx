
let styles = {textDecoration: 'underline', textDecorationColor: '#4EE1A0' , textUnderlineOffset: '10px' }
import person from './assets/person.png'
import group from './assets/Group 26.png'
export default function HeroSection(){
    return(
        <div className="heroSection">
            <img src={group} className='absolute top[133px] mt-16 z-10' />
            <div className="container mx-auto max-w-[1110px] flex flex-col md:flex-row">
                <div className="left mt-[670px] md:mt-32 flex items-center md:items-start flex-col gap-14">
                    <div className="name">
                        <p className="text-white font-bold text-[40px] md:text-[88px] leading-[44px] md:leading-[88px] tracking-[-1.14px] md:tracking-[-2.5px]">Nice to meet you!</p>
                        <p className="text-white font-bold text-[40px] md:text-[88px] leading-[44px] md:leading-[88px] tracking-[-1.14px] md:tracking-[-2.5px]">I’m    <a style={styles} > Adam Keyes.</a></p>
                    </div>
                    <p className="max-w-[343px] md:max-w-[445px] text-[#D9D9D9] font-medium text-[16px] md:text-[18px]  leading-[26px] md:leading-[28px] tracking-[]">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                    <a className="text-[#FFFFFF] font-bold text-[16px] leading-[26px] tracking-[2.29px] cursor-pointer hover:text-[#4EE1A0]" style={styles}>CONTACT ME</a>
                </div>
                <div className="right flex justify-center md:justify-normal">
                    <img src={person} className='w-[80%] md:max-w-[445px]  h-[720px] absolute top-0'/>
                </div>
            </div>
        </div>
    )
}