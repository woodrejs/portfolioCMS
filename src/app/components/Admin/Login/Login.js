import React, { useState } from "react";
import { useCounter } from "../../../utils/sweet_state";
import {
  StyledFormBox,
  StyledForm,
  StyledInputBox,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from "./Login.css";
import { URL } from "../../../../index";

const Login = () => {
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputState;
  const [, { setLogged }] = useCounter();

  const handleForm = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(inputState),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${URL}/user/login`, options)
      .then((resp) => resp.json())
      .then((resp) => {
        if ("token" in resp) return setLogged(true, resp.token);
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledFormBox>
      <StyledForm onSubmit={handleForm}>
        <StyledInputBox>
          <StyledLabel>email</StyledLabel>
          <StyledInput
            type="mail"
            name="email"
            value={email}
            onChange={(e) =>
              setInputState({ ...inputState, email: e.target.value })
            }
          />
        </StyledInputBox>
        <StyledInputBox>
          <StyledLabel>hasło</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={(e) =>
              setInputState({ ...inputState, password: e.target.value })
            }
          />
        </StyledInputBox>

        <StyledBtn type="submit" value="log in" />
      </StyledForm>
    </StyledFormBox>
  );
};

export default Login;
