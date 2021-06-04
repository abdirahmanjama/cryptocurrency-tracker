import React from 'react'
import styled from 'styled-components'

function Coin({coinName, image, symbol, price, volume, priceChange}) {
    return (
        <CoinContainer>
            <Coinn>
                <CoinImage src={image} alt='crypto'></CoinImage>
                
                <CoinName>{coinName}</CoinName>
                <CoinSymbol>{symbol}</CoinSymbol>
                <CoinPrice>£{price}</CoinPrice>
                <CoinVolume>£{volume.toLocaleString()}</CoinVolume>
                {priceChange < 0 ? (
                    <CoinChangeRed>{priceChange.toFixed(2)}%</CoinChangeRed> 
                ) : <CoinChangeGreen>{priceChange.toFixed(2)}%</CoinChangeGreen>  }
            </Coinn>
        </CoinContainer>
    )
}

export default Coin

const CoinContainer = styled.div``

const Coinn = styled.div``
const CoinSymbol = styled.p``
const CoinName = styled.h1``
const CoinPrice = styled.p``
const CoinVolume = styled.p``
const CoinChangeRed = styled.p``
const CoinChangeGreen = styled.p``
const CoinImage = styled.img``
