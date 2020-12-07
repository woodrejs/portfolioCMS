import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledSection = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
export const StyledLeftBox = styled.article`
  min-height: 100vh;
  width: 20vw;
  position: relative;
  background: ${(props) => props.theme.colors.dark};
`;
export const StyledMenu = styled.nav`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 50px;
`;
export const StyledLink = styled(Link)`
  width: 5vw;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
`;
export const StyledBtn = styled.button`
  position: absolute;
  bottom: 2vh;
  right: 3vw;
  border: none;
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`;
export const StyledRightBox = styled.article`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const StyledCartsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;
