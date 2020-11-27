import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import styled from "styled-components";

const ListOrder = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 0px 20px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;

const DetailListItem = () => {
  const orders = useSelector((store) => store.order.orders);

  return (
    <ListOrder>
      {orders.map((order) => (
        <OrderItem
          id={order.id}
          nama={order.nama}
          harga={order.harga}
          quantity={order.quantity}
          total={order.total}
          key={order.id}
        />
      ))}
    </ListOrder>
  );
};

export default DetailListItem;
