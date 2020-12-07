import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  height: 20px;
  border-rigth: 1px solid black;
  margin-top: 5px;
`;
export const StyledInput = styled.input`
  font-size: 14px;
  padding: 3px;
  overflow: hidden;
  width: 170px;
`;
export const StyledSpan = styled.span`
  overflow: hidden;
`;
export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;
export const StyledButton = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  font-weight: bold;
  padding: 2px 7px;
  cursor: pointer;
  font-size: 11px;
  letter-spacing: 1px;
`;
