import axios from 'axios'
import { useState, useEffect} from 'react'
import Coin from './components/Coin';
import Header from './components/Header';

function App() {

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => setCoins(res.data))
    .catch(error => console.log(error))
  }, [])

  function handleChange(e){
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="coin-app">
     
          <Header onChange={handleChange}/>
    {filteredCoins.map(coin => { return(
        <Coin key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} symbol = {coin.symbol} volume={coin.market_cap}/>
      )
    })}
    </div>
  );
}

export default App;


// API CoinGecko - pull market prices using API link
// Returns it in JSON format. 

