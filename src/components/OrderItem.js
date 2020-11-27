import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { REMOVE_ORDER } from "../redux/actions/action-type";

const Order = styled.div`
  height: 160px;
  width: 210px;
  padding: 18px;
  box-sizing: border-box;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: papayawhip;
  margin-top: 0px !important;
  margin: 20px;
`;

const Text = styled.p`
  margin: 0px 0px 4px 0px;
`;

const OrderItem = ({ id, nama, harga, quantity, total }) => {
  const dispatch = useDispatch();

  return (
    <Order>
      <Text>Nama: {nama}</Text>
      <Text>Harga: {harga}/pcs</Text>
      <Text>Quantity: {quantity} pcs</Text>
      <Text>Total Harga: Rp.{total}</Text>
      <button onClick={() => dispatch({ type: REMOVE_ORDER, payload: id })}>
        Remove
      </button>
    </Order>
  );
};

export default OrderItem;
