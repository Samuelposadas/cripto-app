
import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"
import CoinTable from './components/CoinTable/CoinTable';

function App() {


  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
 


  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    const data = await res.data
   
    setCoins(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Coin Market</h1>

        <input type="text" placeholder="Search a Coin" className="form-control text-center bg-dark text-light border-0" onChange={e => setSearch(e.target.value)} />

        <CoinTable coins={coins} search={search} />

      </div>

    </div>
  );
}

export default App;
