

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import PortfolioCard from "../components/HomeComponents/Portfolio/PortfolioCard";
import CardLayout from "../components/Common/CardLayout";
import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    const router = useRouter()
    return (
        <div >
            <div className="flex items-center gap-2 px-2 md:px-8 py-4 pt-8 text-lg font-bold text-Snow"><IoReturnUpBack size={28} className="cursor-pointer hover:scale-110 transition-all" onClick={() => { router.push('/') }} />My Works</div>
            <CardLayout>
                <div className="grid w-full h-full  justify-items-start
                 grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-6 gap-y-6 px-2 md:px-8 pb-12">

                    {
                        isLoading ?
                            [1, 2, 3, 4].map(() => (
                                <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                            ))
                            :
                            data?.map((data, key) => (
                                <PortfolioCard key={key} data={data} />
                            ))

                    }


                </div >
            </CardLayout>
            <Footer />
        </div>

    );
};

export default Portfolio;
