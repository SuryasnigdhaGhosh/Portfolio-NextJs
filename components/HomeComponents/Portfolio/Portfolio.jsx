

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import PortfolioCard from "./PortfolioCard";
import BannerLayout from "../../Common/BannerLayout";
import ImageAndParagraphSkeleton from "../../Common/ImageAndParagraphSkeleton";
import Footer from "../../Footer";
import CardLayout from "../../Common/CardLayout";
import Layout from "../../../pages/layout";
import Link from "next/link";

const Portfolio = () => {



    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    
    return (
        <div className="flex flex-col  px-4 md:px-8 py-12 gap-4">
            <div className="text-lg font-bold text-Snow">My Works</div>
            <CardLayout>
                <div className="grid w-full h-full  justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-6 gap-y-6 ">

                    {
                        isLoading ?
                            [1, 2, 3, 4].map(() => (
                                <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                            ))
                            :
                            data?.slice(0, 4).map((data, key) => (
                                <PortfolioCard key={key} data={data} />
                            ))

                    }


                </div >

            </CardLayout>
            <Link href="/portfolio" className="see-more m-auto">See more</Link>

        </div>

    );
};

export default Portfolio;
