import React from 'react'
import CardLayout from '../Common/CardLayout'

const ArtworkCard = ({ data }) => {
    return (
        <div className="w-full transition">
            <img src={data?.image} className=' w-full h-auto rounded-xl object-cover card_img' />
        </div>
    )
}

export default ArtworkCard