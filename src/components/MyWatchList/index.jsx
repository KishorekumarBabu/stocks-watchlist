import Card from "../../components/Card";

export default function MyWatchList({ watchList }) {
  return (
    <div className="watch-list">
      <div className="watch-data-list">
        {watchList &&
          watchList.map((stockData) => {
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
                isBeingWatched
                stockExchange={stockExchange}
                stockPrice={stockPrice}
                stockValueChange={stockValueChange}
              />
            );
          })}
      </div>
    </div>
  );
}
