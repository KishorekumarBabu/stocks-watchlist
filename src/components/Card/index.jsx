import "./card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

export default function Card(props) {
  const {
    name,
    stockExchange,
    handleWatchListClick,
    handleBuyClick,
    stockPrice,
    isBeingWatched,
    stockValueChange,
    showStockOptions
  } = props;
  const isNegative = stockValueChange[0] === "-";
  return (
    <div className="card">
      <div className="stock-details">
        <div className="stock-name">{name}</div>
        <div className="stock-exchange-name">{stockExchange}</div>
      </div>
      {showStockOptions && (
        <div className="stock-actions">
          <button onClick={handleWatchListClick}>
            {isBeingWatched ? <FavoriteIcon /> : <FavoriteBorderRoundedIcon />}
          </button>
          <button onClick={handleBuyClick}>
            <ShoppingCartRoundedIcon />
          </button>
        </div>
      )}

      <div className="stock-price-details">
        <div className="stock-price">₹{stockPrice}</div>
        <div className={`stock-value-change ${isNegative ? "negative" : ""}`}>
          {stockValueChange}
        </div>
      </div>
    </div>
  );
}
