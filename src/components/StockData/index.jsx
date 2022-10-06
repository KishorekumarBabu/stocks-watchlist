import Card from "../../components/Card";
import mockStockData from "../../mock/stockData.json";

export default function StockDataList() {
  const onChange = () => {};
  return (
    <div className="stock-data-list">
      <div className="search">
        <span>Search: </span>
        <input onChange={onChange}></input>
      </div>
      {mockStockData[0].map((stockData) => {
        const {
          id,
          name,
          stockExchange,
          stockPrice,
          stockValueChange
        } = stockData;
        return (
          <Card
            key={id}
            name={name}
            showStockOptions
            stockExchange={stockExchange}
            stockPrice={stockPrice}
            stockValueChange={stockValueChange}
          />
        );
      })}
    </div>
  );
}
