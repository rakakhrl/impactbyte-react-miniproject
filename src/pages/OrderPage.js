import React, { useEffect } from "react";
import FormOrder from "../components/FormOrder";
import DisplayListItem from "../components/DisplayListItem";
import TotalPrice from "../components/PriceTotal";
import styled from "styled-components";

const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const OrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderPage = () => {
  return (
    <OuterContainer>
      <FormOrder />
      <OrderContainer>
        <DisplayListItem />
        <TotalPrice />
      </OrderContainer>
    </OuterContainer>
  );
};

export default OrderPage;
