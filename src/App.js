import './App.css';
import axios from 'axios'
import { useState, useEffect} from 'react'

function App() {

  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div>
        </div>
    </div>
  );
}

export default App;


// API CoinGecko - pull market prices using API link
// Returns it in JSON format. 

