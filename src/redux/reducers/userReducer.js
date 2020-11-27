import { CHANGE_LOGIN_STATUS } from "../actions/action-type";

const initialState = {
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      return {
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
