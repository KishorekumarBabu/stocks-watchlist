export const setOrders = (stockData) => {
  return (dispatch) => dispatch({ type: "SET_ORDER_LIST", stockData });
};
