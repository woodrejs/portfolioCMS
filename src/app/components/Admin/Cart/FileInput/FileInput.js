import React, { useState } from "react";
import { useCounter } from "../../../../utils/sweet_state";
import FileBase from "react-file-base64";
import { v4 as uuid } from "uuid";
import {
  StyledImg,
  StyledContainer,
  StyledThumbnail,
  StyledBtn,
  StyledPanel,
  StyledPanelBtn,
} from "./FileInput.css";

const inputFileSizes = [
  { id: uuid(), size: "s" },
  { id: uuid(), size: "m" },
  { id: uuid(), size: "l" },
];

const FileInput = ({ name, value, _id }) => {
  const [, { updateProject }] = useCounter();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(value);

  const handleButton = () => {
    if (show) {
      const token = localStorage.getItem("auth-token");
      const options = {
        method: "POST",
        body: JSON.stringify({ file, name }),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      fetch(`/projects/update/file/${_id}`, options)
        .then((resp) => resp.json())
        .then((resp) => updateProject(resp))
        .catch((err) => console.log(err));
    }
    setShow(!show);
  };

  return (
    <StyledContainer>
      {!show && (
        <StyledThumbnail>
          <StyledBtn onClick={handleButton}>{`update ${name}`}</StyledBtn>
          <StyledImg src={file.s.base64} alt="thumbnail" />
        </StyledThumbnail>
      )}
      {show && (
        <StyledPanel>
          {inputFileSizes.map(({ id, size }) => (
            <FileBase
              key={id}
              type="file"
              multiple={false}
              onDone={(Base64) => setFile({ ...file, [size]: Base64 })}
            />
          ))}
          <StyledPanelBtn onClick={handleButton}>zapisz</StyledPanelBtn>
        </StyledPanel>
      )}
    </StyledContainer>
  );
};
export default FileInput;
