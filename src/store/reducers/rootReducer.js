import { combineReducers } from "redux";
import watchListReducer from "./watchLsitReducer";
import orderListReducer from "./orderReducer";

const rootReducer = combineReducers({
  watchList: watchListReducer,
  orderList: orderListReducer
});

export default rootReducer;
