import { CHANGE_DISCOUNT } from "../actions/action-type";

const calculateDiscount = (discountId, currentTotal) => (dispatch) => {
  let discountedPrice;

  switch (discountId) {
    case "1":
      discountedPrice = currentTotal * 0.3;
      break;
    case "2":
      discountedPrice = currentTotal * 0.5;
      break;
    case "3":
      discountedPrice = currentTotal * 0.7;
      break;
    case "4":
      discountedPrice = currentTotal * 0.1;
      break;

    default:
      discountedPrice = 0;
      break;
  }

  dispatch({ type: CHANGE_DISCOUNT, payload: currentTotal - discountedPrice });
};

export { calculateDiscount };
