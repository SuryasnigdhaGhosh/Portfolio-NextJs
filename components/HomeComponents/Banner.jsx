import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import Link from 'next/link';
import AnimationLottie from '../../utils/animation-lottie';
import experience from '../../public/lottie/code.json';
import laptop from '../../public/lottie/laptop.json';
import coder from "../../public/lottie/code.json"
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../constants/constants';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center sm:py-6 justify-center w-full h-full bg-gradient-to-t from-LightViolet2">


                <div className="bg-LightViolet/10 w-[95%] h-[100%] px-4 sm:py-2 rounded-xl overflow-hidden flex  md:block">

                    <div className="flex items-center h-full  md:items-center md:justify-between px-6 m-auto">

                        <div className="flex flex-col items-center sm:items-start">
                            <div className='flex flex-col items-center sm:hidden'>
                                <AnimationLottie animationPath={coder} width="170px" />

                                <div className='flex flex-col items-center justify-center px-2'>
                                    <span className='text-gray-300 text-lg font-bold break-normal'>{NAME}</span>

                                    <span className='text-sm text-LightGray text-center mt-2'>Coding, gaming, and a bit of coffee—turning bugs into features and sprints into victories!</span>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="flex gap-2 text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold mb-2">Hello There!{" "}
                                    <span className="wave text-3xl sm:text-4xl xl:text-4xl" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>

                                </h1>
                                <span className='text-base text-LightGray text-center mt-2'>Coding, gaming, and a bit of coffee—turning bugs into features and sprints into victories!</span>



                            </div>
                            <div className="">
                                <div className=" py-2 font-cascadia-normal text-Snow pb-4 text-xs  lg:h-auto">
                                    <span><span className="text-LightViolet sm:text-base xl:text-lg font-bold ">{"< >"}</span>
                                        <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am a  <span className="inline-block">
                                            <Typewriter
                                            
                                                options={{
                                                    strings:
                                                        ['Software Developer',
                                                            'Frontend Developer',
                                                            'Problem Solver'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> <span className="text-LightViolet sm:text-base xl:text-lg font-bold">{"< / >"} </span></span>
                                </div>
                            </div>

                            <Link href='/resume-copy.pdf' target='_blank' className="button cursor-pointer">Resume</Link>
                        </div>


                        <div className="w-72 hidden   sm:block">

                            {/* <img  src="images/coder.png" alt="emoji" /> */}
                            {/* <AnimationLottie animationPath={experience} /> */}
                            <AnimationLottie animationPath={laptop} />

                        </div>


                    </div>
                </div>

                {/* details in row */}
                {/* <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>8+</span>
                        <span className='text-xs text-Snow'>Freelance Clients</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>Honors & Awards</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Opensource Projects</span>
                    </div>

                </div> */}
            </div>
        </BannerLayout>
    )
}

export default Banner