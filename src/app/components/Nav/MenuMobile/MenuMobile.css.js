import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledHamburger = styled(motion.div)`
  align-self: center;
  grid-area: 1/9/2/13;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: none;
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: none;
  }
`;
export const StyledHamburgerName = styled(motion.span)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 100%;
  margin-right: 1.2em;
  color: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};
`;
export const StyledHamburgerIcon = styled(motion.img)``;
export const StyledMobileMenu = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 70%;
  top: 0;
  right: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  background: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.bck
      : (props) => props.theme.colors.dark};

  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: none;
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: none;
  }
`;
export const StyledMobileMenuCloseBtn = styled(motion.img)`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 20px;

  cursor: pointer;

  @media screen and (orientation: landscape) {
    flex: 2;
  }
`;
export const StyledMobileMenuBox = styled(motion.div)`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const StyledMobileMenuItem = styled(motion.div)`
  margin: 2em 0;
  cursor: pointer;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    margin: 3em 0;
  }
  @media screen and (orientation: landscape) {
    margin: 0.3em 0;
  }
`;
export const StyledMobileMenuLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: ${(props) => props.theme.size.m};
  color: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.dark
      : (props) => props.theme.colors.bck};

  @media screen and (min-width: 375px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.l};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xl};
  }
  @media screen and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xl};
  }
`;
