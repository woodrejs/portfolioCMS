import React, { useState } from "react";
import { useCounter } from "../../../utils/sweet_state";
import { v4 as uuid } from "uuid";
import axios from "axios";
import {
  StyledForm,
  StyledButton,
  StyledTitle,
  StyledBox,
  StyledInput,
  StyledLabel,
} from "./ProjectForm.css";

const textInputsNames = [
  { name: "title", id: uuid() },
  { name: "description", id: uuid() },
  { name: "date", id: uuid() },
  { name: "type", id: uuid() },
  { name: "link", id: uuid() },
];

const ProjectForm = () => {
  const [, { addProject }] = useCounter();
  const [newProject, setNewProject] = useState(null);

  //handlers
  const handleInput = (e, name) =>
    setNewProject({ ...newProject, [name]: e.target.value });
  const handleForm = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("auth-token");
    const url = `${process.env.REACT_APP_URL}/projects`;
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };

    axios
      .post(url, newProject, { headers })
      .then((resp) => addProject(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <StyledForm onSubmit={(e) => handleForm(e)}>
      <StyledTitle children="Dodaj projekt" />

      {textInputsNames.map(({ name, id }) => (
        <StyledBox key={id}>
          <StyledLabel htmlFor={name} children={name} />
          <StyledInput
            type="text"
            name={name}
            id={name}
            onChange={(e) => handleInput(e, name)}
          />
        </StyledBox>
      ))}

      <StyledButton type="submit" value="dodaj" />
    </StyledForm>
  );
};
export default ProjectForm;
