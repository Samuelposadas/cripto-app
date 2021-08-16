import RowCoin from "../CoinRow/CoinRow"

const tables = ["#", "Coin", "Price", "Price Change", "24 Volume"]

const CoinTable = ({ coins, search }) => {

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) |  coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <table className="table mt-4 bg-dark text-white">
                <thead>
                    <tr>
                        {tables.map((table, index) => (
                            <th key={index}>{table}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {filteredCoins.map((coin, index) => (

                        <RowCoin key={index} coin={coin} index={index} />

                    ))}
                </tbody>

            </table>
        </>
    )
}

export default CoinTable
