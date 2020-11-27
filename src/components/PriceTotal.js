import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TotalContainer = styled.div`
  height: 60px;
  padding: 0px 30px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = () => {
  const { totalPrice, totalAfterDiscount } = useSelector(
    (store) => store.order
  );

  return (
    <TotalContainer>
      <p>Total Bayar: Rp.{totalPrice}</p>
      <p>Total Setelah Diskon: Rp.{totalAfterDiscount}</p>
    </TotalContainer>
  );
};

export default TotalPrice;
