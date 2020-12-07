import React, { useState } from "react";
import {
  StyledBox,
  StyledInput,
  StyledSpan,
  StyledLabel,
  StyledButton,
} from "./TextInput.css";
import { URL } from "../../../../../index";

const TextInput = ({ name, value, _id }) => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (e) => setInputValue(e.target.value);
  const handleButton = () => {
    if (show) {
      const token = localStorage.getItem("auth-token");
      const options = {
        method: "POST",
        body: JSON.stringify({ inputValue, name }),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };

      fetch(`${URL}/projects/update/text/${_id}`, options).catch((err) =>
        console.log(err)
      );
    }
    setShow(!show);
  };

  return (
    <div>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledBox>
        {show && (
          <StyledInput
            type="text"
            name={name}
            id={name}
            value={inputValue}
            onChange={handleInput}
          />
        )}
        {!show && <StyledSpan>{inputValue}</StyledSpan>}
        <StyledButton onClick={handleButton}>
          {!show ? "update" : "zapisz"}
        </StyledButton>
      </StyledBox>
    </div>
  );
};
export default TextInput;
