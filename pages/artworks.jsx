import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import ArtworkCard from "../components/Artworks/ArtworkCard";
import { Modal } from "antd";
import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/router";


const Recommendations = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [imgPath, setImgPath] = useState(false)
    const router = useRouter()
    const { isLoading, error, data } = useQuery('artworks', () =>
        axios.get('api/artworks')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching artworks:', error)))


    return (
        <>
            {/* <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Artworks</div>

            <div className="grid justify items-centfer grid-flow-row md:grid-cols-2 grid-rows-full gap-4 px-8 ">
                {isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    data?.map((data, key) => (
                        <ArtworkCard key={key} data={data} />
                    ))
                }

            </div> */}
            
            <div className=" flex flex-col px-2 md:px-8 py-4 text-lg font-bold text-Snow"><h1 className="flex items-center gap-2"><IoReturnUpBack size={28} className="cursor-pointer hover:scale-110 transition-all"  onClick={()=>{router.push('/')}}/>My Artworks</h1> <span className='text-sm text-gray-600 ml-8'>Click to view full image</span></div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 pt-2">
            {isOpen && <div onClick={(e) => setIsOpen(false)} className='fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[12px] z-40'></div>}

                <div className="grid gap-4">
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork1.jpg") }} src="artworks/artwork1.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork2.jpg") }} src="artworks/artwork2.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork3.jpg") }} src="artworks/artwork3.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork4.jpg") }} src="artworks/artwork4.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork5.jpg") }} src="artworks/artwork5.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork6.jpg") }} src="artworks/artwork6.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork7.jpg") }} src="artworks/artwork7.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork8.jpg") }} src="artworks/artwork8.jpg" alt="" />
                    </div>
                    <div className="image-wrapper">
                        <img className="h-full w-full object-cover rounded-lg" onClick={() => { setIsOpen(true); setImgPath("artworks/artwork9.jpg") }} src="artworks/artwork9.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* <img class="h-auto w-auto object-contain rounded-lg p-8 pt-0" src="artworks/artwork10.jpg" alt=""/> */}


            <Modal
                // className=' backdrop-blur-3xl drop-shadow-3xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <img className="image-pop " src={imgPath} alt="" />

            </Modal>
        </>
    )
}

export default Recommendations

