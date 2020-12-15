import React from "react";
import TextInput from "./TextInput";
import FileInput from "./FileInput";
import axios from "axios";
import { useCounter } from "../../../utils/sweet_state";
import DarkCloseIcon from "../../../../assets/icons/Close_Dark.svg";
import {
  StyledCart,
  StyledButton,
  StyledLeftBox,
  StyledRightBox,
} from "./Cart.css";

const Cart = ({ state }) => {
  const [, { deleteProject }] = useCounter();
  const { _id, title, description, date, type, link } = state;
  const { thumbnail, deskopView, mobileView } = state;

  //handlers
  const handleButton = () => {
    const token = localStorage.getItem("auth-token");
    const headers = { "x-auth-token": token };
    const url = `${process.env.REACT_APP_URL}/projects/delete/${_id}`;

    axios
      .delete(url, { headers })
      .then(({ data }) => deleteProject(data._id))
      .catch((err) => console.log(err));
  };

  return (
    <StyledCart>
      <StyledButton
        onClick={handleButton}
        src={DarkCloseIcon}
        alt="close_icon"
      />
      <StyledLeftBox>
        <TextInput name="title" value={title} _id={_id} />
        <TextInput name="description" value={description} _id={_id} />
        <TextInput name="date" value={date} _id={_id} />
        <TextInput name="type" value={type} _id={_id} />
        <TextInput name="link" value={link} _id={_id} />
      </StyledLeftBox>
      <StyledRightBox>
        <FileInput name="thumbnail" value={thumbnail} _id={_id} />
        <FileInput name="deskopView" value={deskopView} _id={_id} />
        <FileInput name="mobileView" value={mobileView} _id={_id} />
      </StyledRightBox>
    </StyledCart>
  );
};
export default Cart;
