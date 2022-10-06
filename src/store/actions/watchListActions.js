export const setWatchList = (stockData) => {
  return (dispatch) => dispatch({ type: "SET_WATCH_LIST", stockData });
};
