import React from 'react'

function Coin({coinName, image, symbol, price, volume}) {
    return (
            <div className = 'coin'>
                <img src={image} alt='crypto'/>
                <h1>{coinName}</h1>
                <p className='coin-symbol'>{symbol}</p>
                <p className = 'coin-price'>£{price}</p>
                <p className = 'coin-volume'>£{volume.toLocaleString()}</p>
            </div>
    )
}

export default Coin
