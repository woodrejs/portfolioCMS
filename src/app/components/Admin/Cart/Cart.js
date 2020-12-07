import React from "react";
import TextInput from "./TextInput";
import FileInput from "./FileInput";
import { useCounter } from "../../../utils/sweet_state";
import {
  StyledCart,
  StyledButton,
  StyledLeftBox,
  StyledRightBox,
} from "./Cart.css";
import DarkCloseIcon from "../../../../assets/icons/Close_Dark.svg";
import { URL } from "../../../../index";

const Cart = ({ state }) => {
  const [, { deleteProject }] = useCounter();
  const _id = state._id;

  const handleButton = () => {
    const token = localStorage.getItem("auth-token");
    const options = {
      method: "GET",
      headers: { "x-auth-token": token },
    };

    fetch(`${URL}/projects/delete/${_id}`, options)
      .then((resp) => resp.json())
      .then((resp) => deleteProject(resp._id))
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
        <TextInput name="title" value={state.title} _id={_id} />
        <TextInput name="description" value={state.description} _id={_id} />
        <TextInput name="date" value={state.date} _id={_id} />
        <TextInput name="type" value={state.type} _id={_id} />
        <TextInput name="link" value={state.link} _id={_id} />
      </StyledLeftBox>
      <StyledRightBox>
        <FileInput name="thumbnail" value={state.thumbnail} _id={_id} />
        <FileInput name="deskopView" value={state.deskopView} _id={_id} />
        <FileInput name="mobileView" value={state.mobileView} _id={_id} />
      </StyledRightBox>
    </StyledCart>
  );
};
export default Cart;
