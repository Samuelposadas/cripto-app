
const RowCoin = ({ coin, index }) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: "6%" }} className="img-fluid me-4" />
                <span>{coin.name} <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span> </span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_24h > 0 ? "text-success" : "text-danger"}>{coin.price_change_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default RowCoin
