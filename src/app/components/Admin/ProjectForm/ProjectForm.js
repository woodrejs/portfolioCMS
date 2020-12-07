import React, { useState } from "react";
import TextInput from "./TextInput";
import FileInput from ".//FileInput";
import { useCounter } from "../../../utils/sweet_state";
import { v4 as uuid } from "uuid";
import {
  StyledForm,
  StyledTopBox,
  StyledBotBox,
  StyledButton,
  StyledTitle,
} from "./ProjectForm.css";
import { URL } from "../../../../index";

const textInputsNames = [
  { name: "title", id: uuid() },
  { name: "description", id: uuid() },
  { name: "date", id: uuid() },
  { name: "type", id: uuid() },
  { name: "link", id: uuid() },
];
const fileInputsNames = [
  { name: "thumbnail", id: uuid() },
  { name: "deskopView", id: uuid() },
  { name: "mobileView", id: uuid() },
];

const ProjectForm = () => {
  const [, { addProject }] = useCounter();
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    date: "",
    type: "",
    link: "",
    thumbnail: { s: "", l: "" },
    deskopView: { s: "", m: "", l: "" },
    mobileView: { s: "", m: "", l: "" },
  });

  const handleForm = (e, data) => {
    e.preventDefault();
    const token = localStorage.getItem("auth-token");

    return fetch(`${URL}/projects`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => addProject(resp))
      .catch((err) => console.log(err));
  };

  return (
    <StyledForm onSubmit={(e) => handleForm(e, newProject)}>
      <StyledTitle>Dodaj projekt</StyledTitle>
      <StyledTopBox>
        {textInputsNames.map(({ name, id }) => (
          <TextInput
            key={id}
            name={name}
            change={(obj) => setNewProject({ ...newProject, [name]: obj })}
          />
        ))}
      </StyledTopBox>

      <StyledBotBox>
        {fileInputsNames.map(({ name, id }) => (
          <FileInput
            key={id}
            name={name}
            change={(obj, size) =>
              setNewProject({
                ...newProject,
                [name]: { ...newProject[name], [size]: obj },
              })
            }
          />
        ))}
      </StyledBotBox>

      <StyledButton type="submit" value="dodaj" />
    </StyledForm>
  );
};
export default ProjectForm;
