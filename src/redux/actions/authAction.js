import api from "../../utils/api";
import { CHANGE_LOGIN_STATUS } from "./action-type";

const login = (username, password) => async (dispatch) => {
  try {
    const payload = {
      username,
      password,
    };
    const response = await api.post("/login", payload);

    if (response.status === 200) {
      localStorage.setItem("isUserLogin", "true");
      dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
    }
  } catch (err) {
    console.log(`Login error. ${err}.`);
  }
};

export { login };
