import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledThumbnail = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
export const StyledBtn = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;
export const StyledImg = styled.img`
  width: 100%;
  position: absolute;
`;
export const StyledPanel = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
`;
export const StyledPanelBtn = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const StyledSpan = styled.span`
  text-transform: uppercase;
  margin: 25px 0 15px 0;
  width: 100%;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;
