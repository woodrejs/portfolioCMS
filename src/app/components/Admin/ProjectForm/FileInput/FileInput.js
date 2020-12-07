import React from "react";
import FileBase from "react-file-base64";
import { StyledBox, StyledSpan } from "./FileInput.css";
import { v4 as uuid } from "uuid";

const inputFileSizes = [
  { id: uuid(), size: "s" },
  { id: uuid(), size: "m" },
  { id: uuid(), size: "l" },
];
const FileInput = ({ name, change }) => {
  return (
    <StyledBox>
      <StyledSpan>{name}</StyledSpan>

      {inputFileSizes.map(({ id, size }) => (
        <FileBase
          key={id}
          type="file"
          multiple={false}
          onDone={(Base64) => change(Base64, size)}
        />
      ))}
    </StyledBox>
  );
};
export default FileInput;
