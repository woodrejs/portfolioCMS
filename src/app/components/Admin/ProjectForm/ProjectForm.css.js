import styled from "styled-components";

export const StyledForm = styled.form`
  background: ${(props) => props.theme.colors.light};
  min-height: 25vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: relative;
`;
export const StyledButton = styled.input`
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  font-weight: bold;
  padding: 7px 10px;
  cursor: pointer;
`;
export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 5%;
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 5px 0;
`;
export const StyledInput = styled.input`
  margin-top: 8px;
  font-size: 14px;
  padding: 3px;
`;
export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;
