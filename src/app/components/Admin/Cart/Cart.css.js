import styled from "styled-components";

export const StyledCart = styled.article`
  width: 38vw;
  height: 65vh;
  margin: 25px 0;
  background: ${(props) => props.theme.colors.light};
  padding: 35px;
  position: relative;
  display: flex;
`;
export const StyledButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`;
export const StyledLeftBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledRightBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
