import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ORDER } from "../redux/actions/action-type";
import { calculateDiscount } from "../redux/actions/discountAction";
import styled from "styled-components";

const FormInput = styled.form`
  width: 30%;
  padding: 50px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: papayawhip;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Label = styled.p`
  margin: 0px 0px 4px 0px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
`;

const DiscountDropdown = styled.select`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 10px;
  border: none;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  background-color: palevioletred;
  color: white;
  border: none;
`;

const FormOrder = () => {
  const { orders, totalPrice } = useSelector((store) => store.order);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();

  useEffect(
    () => {
      console.log(totalPrice);
      dispatch(calculateDiscount(discount, totalPrice));
    },
    // eslint-disable-next-line
    [discount, orders]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_ORDER,
      payload: {
        id: orders.length + 1,
        nama: name,
        harga: price,
        quantity: quantity,
        total: price * quantity,
      },
    });

    setName("");
    setQuantity(0);
    setPrice(0);
  };

  return (
    <FormInput onSubmit={handleSubmit}>
      <InputContainer>
        <Label>Nama Barang</Label>
        <InputField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Kuantitas Barang</Label>
        <InputField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <Label>Harga Barang</Label>
        <InputField
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <Label>Jenis Diskon</Label>
        <DiscountDropdown
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
        >
          <option value="0">Pilih Diskon</option>
          <option value="1">Member</option>
          <option value="2">Diskon 50%</option>
          <option value="3">Diskon Ulang Tahun</option>
          <option value="4">Diskon Akhir Tahun</option>
        </DiscountDropdown>
      </InputContainer>
      <SubmitButton type="submit">Order</SubmitButton>
    </FormInput>
  );
};

export default FormOrder;
