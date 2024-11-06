import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import art from "../../../public/lottie/settings.json"
import AnimationLottie from "../../../utils/animation-lottie";
import Link from "next/link";

const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-6 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-4 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

                <div className="flex items-center justify-center">
                    <AnimationLottie animationPath={art} width="50%" />
                    {/* <Link href='/artworks'  className="py-2  px-6 text-white/90 card_stylings boxShodow cursor-pointer h-max w-max bg-EveningBlack ">Checkout my Art</Link> */}

                </div>

            </div>
        </>
    )
}

export default MyExpertise