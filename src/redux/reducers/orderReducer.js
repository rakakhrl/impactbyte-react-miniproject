import {
  ADD_ORDER,
  CHANGE_DISCOUNT,
  REMOVE_ORDER,
} from "../actions/action-type";

const initialState = {
  orders: [],
  totalPrice: 0,
  totalAfterDiscount: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = [...state.orders, action.payload];
      const newTotalPrice = state.totalPrice + action.payload.total;
      return {
        ...state,
        orders: newOrder,
        totalPrice: newTotalPrice,
      };
    case REMOVE_ORDER:
      const filteredOrder = state.orders.filter(
        (order) => order.id !== action.payload
      );
      const deletedOrder = state.orders.filter(
        (order) => order.id === action.payload
      );
      const subtractedTotalPrice = state.totalPrice - deletedOrder[0].total;
      return {
        ...state,
        orders: filteredOrder,
        totalPrice: subtractedTotalPrice,
      };
    case CHANGE_DISCOUNT:
      return {
        ...state,
        totalAfterDiscount: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
