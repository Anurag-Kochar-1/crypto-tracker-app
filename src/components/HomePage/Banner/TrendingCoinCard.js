import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from '../../../CryptoContext'

function TrendingCoinCard( {trendingCoindata} ) {

    let profit = trendingCoindata.price_change_percentage >= 0 

    const {symbol} = CryptoState()
  return (
        <Link to={`/coins/${trendingCoindata.id}`} className="hover:cursor-pointer">

            <div className=' py-2 mx-2 flex flex-col justify-start items-center'>
                <img src={trendingCoindata?.image} alt={trendingCoindata.name} className='w-20 py-3' />

                <span className='flex flex-row justify-center items-start '> 
                    <p className='text-white efont-semibold pb-2 text-xl mr-2 text-center'>{trendingCoindata.name} </p>    
                    <p className={ profit > 0 ? "text-green-600 font-medium text-center" : "text-red-600 font-medium text-center" }> {profit && "+" } {trendingCoindata.price_change_percentage_24h?.toFixed(2)}% </p>

                </span>

                <p className='text-white font-medium text-lg pb-2'> {symbol} {trendingCoindata.current_price}  </p>
                        
            </div>
        </Link>
  )
}

export default TrendingCoinCard