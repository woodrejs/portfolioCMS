import React from "react";
import { StyledBox, StyledInput, StyledLabel } from "./TextInput.css";

const TextInput = ({ name, change, type = "text" }) => {
  return (
    <StyledBox>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={name}
        onChange={(e) => change(e.target.value)}
      />
    </StyledBox>
  );
};
export default TextInput;
