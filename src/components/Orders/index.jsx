import Card from "../../components/Card";

export default function Orders({ orders }) {
  return (
    <div className="orders">
      <div className="order-data-list">
        {orders &&
          orders.map((stockData) => {
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
    </div>
  );
}
