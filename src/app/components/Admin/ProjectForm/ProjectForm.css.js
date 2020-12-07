import styled from "styled-components";

export const StyledForm = styled.form`
  background: ${(props) => props.theme.colors.light};
  min-height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
`;
export const StyledTopBox = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledBotBox = styled.div`
  height: 14vh;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: 10px;
`;
