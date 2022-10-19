import React , {useEffect, useState} from 'react'
import { TrendingCoins } from "../../../API/Requests"
import axios from "axios"
import { CryptoState } from '../../../CryptoContext'
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import TrendingCoinCard from './TrendingCoinCard';


function Carousel( ) {
    const [trendingCoinData, setTrendingCoinData ] = useState([])
    const {currency} =  CryptoState()

    const fetchTrendingCoins = async () => {
        const {data} = await axios.get(TrendingCoins(currency))
        setTrendingCoinData(data)
    }

    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])

    const responsive = {
        0: {
          items: 1,
        },
        350: {
          items :2,
        },
        512: {
          items: 4,
        },
    };

    const items = trendingCoinData.map((trendingCoin) => {
        return <TrendingCoinCard trendingCoindata = {trendingCoin} />
            
        
           
    })

  return (
    <div className='w-[90%] h-[55%] my-1 flex flex-col items-center justify-center'>
        {/* <button onClick={() => {console.log(trendingCoinData)}} > LOG Trending coin data </button> */}

        <AliceCarousel
         mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration = {1500}
          disableDotsControls
          responsive={responsive}
          autoPlay
          disableButtonsControls
          items={items}
          />
    </div>
  )
}

export default Carousel