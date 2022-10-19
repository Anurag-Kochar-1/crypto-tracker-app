import React from 'react'
import Carousel from './Carousel'

function Banner() {
  return (
    <div
    className='w-full h-[50vh] flex flex-col items-center justify-around py-4
    
    '
    style={{
        backgroundImage: 'url('+`https://raw.githubusercontent.com/piyush-eon/react-crypto-tracker/master/public/banner2.jpg`+')',
    }}
    >

        <h2 className='text-[#F1F1F1] font-bold text-3xl font-Montserrat
        sm:text-4xl
        '> Krypto Tracker </h2>
        <p className='text-gray-300 font-Montserrat font-light text-sm px-7 text-center
        '> Get All The Info Regarding Your Favorite Crypto Currency </p>

        <Carousel />
    </div>
  )
}

export default Banner