import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import orderReducer from "./reducers/orderReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  order: orderReducer,
  user: userReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
