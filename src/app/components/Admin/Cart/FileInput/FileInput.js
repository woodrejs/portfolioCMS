import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import {
  StyledImg,
  StyledContainer,
  StyledBtn,
  StyledPanel,
  StyledPanelBtn,
} from "./FileInput.css";

const fileInputs = [
  { id: uuid(), size: "s" },
  { id: uuid(), size: "m" },
  { id: uuid(), size: "l" },
];

const FileInput = ({ name, _id, value }) => {
  const [show, setShow] = useState(false);
  const [currInput, setCurrInput] = useState(null);
  const [files, setFiles] = useState(null);
  const [thumbScr, setThumbSrc] = useState(
    value && value.s && value.s.url ? value.s.url : null
  );

  //handlers
  const handleBtn = () => setShow(!show);
  const handleInput = (e, size) => {
    const file = e.target.files[0];
    setFiles({ ...files, [size]: file });
    setCurrInput(size);
  };

  //upload
  useEffect(() => {
    if (files) {
      const url = `${process.env.REACT_APP_URL}/image/?_id=${_id}&name=${name}&size=${currInput}`;
      const token = localStorage.getItem("auth-token");
      const headers = {
        "content-Type": "multipart/form-data",
        "x-auth-token": token,
      };
      const formData = new FormData();
      formData.append("image", files[currInput]);

      axios
        .post(url, formData, { headers })
        .then((res) => setThumbSrc(res.data.publicUrl));
    }
  }, [files]);

  return (
    <StyledContainer>
      <StyledPanel>
        {show ? (
          <>
            <StyledPanelBtn onClick={handleBtn} children={`Zapisz ${name}`} />
            {fileInputs.map(({ size, id }) => (
              <div key={id}>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleInput(e, size)}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <StyledImg src={thumbScr} alt="thumbnail" />
            <StyledBtn onClick={handleBtn} children={`Zmien ${name}`} />
          </>
        )}
      </StyledPanel>
    </StyledContainer>
  );
};
export default FileInput;
