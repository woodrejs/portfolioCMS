import React, { useState } from "react";
import { useCounter } from "../../../utils/sweet_state";
import axios from "axios";
import { v4 as uuid } from "uuid";
import {
  StyledFormBox,
  StyledForm,
  StyledInputBox,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from "./Login.css";

const inputs = [
  { name: "email", id: uuid() },
  { name: "password", id: uuid() },
];

const Login = () => {
  const [state, setState] = useState();
  const [, { setLogged }] = useCounter();

  //handlers
  const handleForm = (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_URL}/user/login`;
    const headers = { "Content-Type": "application/json" };

    axios
      .post(url, state, headers)
      .then(({ data }) => {
        if ("token" in data) return setLogged(true, data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledFormBox>
      <StyledForm onSubmit={handleForm}>
        {inputs.map(({ name, id }) => (
          <StyledInputBox key={id}>
            <StyledLabel children={name} />
            <StyledInput
              type={name}
              name={name}
              value={state && state[name] ? state[name] : ""}
              onChange={(e) => setState({ ...state, [name]: e.target.value })}
            />
          </StyledInputBox>
        ))}

        <StyledBtn type="submit" value="zaloguj" />
      </StyledForm>
    </StyledFormBox>
  );
};

export default Login;
