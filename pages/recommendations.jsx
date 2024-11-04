import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import RecommendationCard from "../components/Recommendation/RecommendationCard";


const Recommendations = () => {
    const { isLoading, error, data } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    data?.map((data, key) => (
                        <RecommendationCard key={key} data={data} />
                    ))
                }

            </div>
        </>
    )
}

export default Recommendations

