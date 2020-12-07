import styled from "styled-components";

export const StyledFormBox = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledForm = styled.form`
  height: 35vh;
  width: 25vw;
  background: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledInputBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.light};
  margin-bottom: 10px;
`;
export const StyledInput = styled.input`
  margin: 5px 0 10px 0;
  font-size: 14px;
  padding: 3px;
  width: 100%;
  height: 30px;
`;
export const StyledBtn = styled.input`
  border: none;
  background: ${(props) => props.theme.colors.bck};
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 20px;
`;
