import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { CHANGE_LOGIN_STATUS } from "./redux/actions/action-type";

function App() {
  const isLoginPersist = localStorage.getItem("isUserLogin");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginPersist === "true") {
      dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
    } else {
      dispatch({ type: CHANGE_LOGIN_STATUS, payload: false });
    }
  }, []);

  return (
    <Switch>
      <ProtectedRoute path="/order-page" redirectTo="/" exact>
        <OrderPage />
      </ProtectedRoute>
      <Route path="/" exact>
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
