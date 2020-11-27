import React, { useEffect, useState } from "react";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`;

const LoginForm = styled.form`
  box-sizing: border-box;
  height: 40%;
  width: 30%;
  padding: 40px;
  background-color: palevioletred;
  border-radius: 10px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
`;

const LoginSubmit = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 30px;
  border-radius: 8px;
  background-color: papayawhip;
  color: palevioletred;
  border: none;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((store) => store.user.isLogin);

  useEffect(
    () => {
      if (isLogin) {
        history.push("/order-page");
      }
    },
    // eslint-disable-next-line
    [isLogin]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <LoginContainer>
      <h2 style={{ color: "palevioletred" }}>Login POS System</h2>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginSubmit type="submit">Submit</LoginSubmit>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
