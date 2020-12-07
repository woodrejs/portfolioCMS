import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../Line";

export const StyledNav = styled.nav`
  max-width: 1366px;
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  background: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.dark
      : (props) => props.theme.colors.bck};

  @media screen and (min-width: 600px) and (orientation: portrait) {
    height: 130px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 130px;
  }
`;
export const StyledBrand = styled(motion.custom(Link))`
  display: flex;
  align-self: center;
  align-items: center;
  grid-area: 1/1/2/6;
  text-decoration: none;

  @media screen and (orientation: portrait) {
    grid-area: 1/1/2/8;
  }
`;
export const StyledBrandIcon = styled(motion.img)`
  height: 18px;
`;
export const StyledBrandName = styled(motion.span)`
  margin-left: 1em;
  text-transform: uppercase;

  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
`;
export const StyledLine = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: end;
`;
