const initState = {
  orderList: []
};

const orderListReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ORDER_LIST":
      return state;

    default:
      return state;
  }
};

export default orderListReducer;
