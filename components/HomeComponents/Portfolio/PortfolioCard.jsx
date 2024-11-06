import { useState } from "react";
import Badge from "../../Common/Badge"

import { CiLink } from "react-icons/ci";


const PortfolioCard = ({ data }) => {

const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card_stylings overflow-hidden h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src={isHovered ? data?.gif ? data?.gif : data?.image : data?.image}
                alt="portfolio img"
                className="w-full object-cover object-top  opacity-70 h-60 sm:h-60 md:h-80"
            />
            <div id="arrow" className="py-2 px-6 card_stylings h-full hover:-translate-y-10 bg-DeepNightBlack/10 hover:bg-black transition-all ease-in-out duration-500">
                <div className="flex justify-between items-center p-0 m-0 ">
                    <div>
                        <h3 className=" flex flex-col  mr-2 italic font-semibold pt-2 text-xl text-Snow leading-tight sm:leading-normal">
                            {data?.url === "/" ?
                                data?.projectName
                                : (
                                    <a
                                        href={data?.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:underline"
                                    >
                                        {data?.projectName}<CiLink />
                                    </a>
                                )}
                        </h3>
                        {/* <div className="text-Snow transition duration-500 hover:text-yellow transform hover:-translate-y-1 hover:scale-110 pt-4 text-base">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="globe"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="svg-inline--fa fa-globe fa-w-16"
                            >
                                <path
                                    fill="currentColor"
                                    d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                                    className=""
                                ></path>
                            </svg>
                        </a>
                      </div> */}
                        <span className="text-xs text-white/70 shrink-0">{data?.organization}</span>

                        <p className="text-xs text-LightGray  font-normal mt-3 mb-2">
                            {data?.projectDetail}
                        </p>
                    </div>

                </div>
                <div className="text-sm flex flex-wrap gap-3 py-2">
                    {data.technologiesUsed.map((index, key) => <Badge key={key} title={index.tech} />)}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard