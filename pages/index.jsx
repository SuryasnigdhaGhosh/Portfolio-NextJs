import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Portfolio from '../components/HomeComponents/Portfolio/Portfolio';
import Background from './background';
import AnimationLottie from '../utils/animation-lottie';
import art from "../public/lottie/art2.json"
import art2 from "../public/lottie/art.json"
import Link from 'next/link';

const home = () => {
    return (
        <div className="Home-Page -z-10 ">
            <Banner />
            <MyExpertise />
            <Portfolio />
            {/* <ClientReviews /> */}
           
            <Background />
            <div className="flex items-center justify-center w-full ">
                {/* <AnimationLottie animationPath={art} width="30%" /> */}
                {/* <AnimationLottie animationPath={art} width="30%" /> */}
                <AnimationLottie animationPath={art} width="50%" />
            </div>
            <Footer />

        </div>
    )
}

export default home