import React, { useState } from "react";
import axios from "axios";
import {
  StyledBox,
  StyledInput,
  StyledSpan,
  StyledLabel,
  StyledButton,
} from "./TextInput.css";

const TextInput = ({ name, value, _id }) => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  //handlers
  const handleInput = (e) => setInputValue(e.target.value);
  const handleButton = () => {
    if (show) {
      const token = localStorage.getItem("auth-token");
      const url = `${process.env.REACT_APP_URL}/projects/update/text/${_id}`;
      const body = { inputValue, name };
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": token,
      };

      axios.post(url, body, { headers }).catch((err) => console.log(err));
    }
    setShow(!show);
  };

  return (
    <div>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledBox>
        {show ? (
          <>
            <StyledInput
              type="text"
              name={name}
              id={name}
              value={inputValue}
              onChange={(e) => handleInput(e)}
            />
            <StyledButton onClick={handleButton} children="zapisz" />
          </>
        ) : (
          <>
            <StyledSpan children={inputValue} />
            <StyledButton onClick={handleButton} children="zmien" />
          </>
        )}
      </StyledBox>
    </div>
  );
};
export default TextInput;
