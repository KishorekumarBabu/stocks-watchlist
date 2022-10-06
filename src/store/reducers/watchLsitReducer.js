const initState = {
  watchList: []
};

const watchListReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_WATCH_LIST":
      return state;

    case "REMOVE_WATCH_LIST":
      return state;

    default:
      return state;
  }
};

export default watchListReducer;
