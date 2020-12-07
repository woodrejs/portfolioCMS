import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const StyledMenu = styled(motion.div)`
  display: none;
  align-self: center;
  justify-content: space-between;

  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: flex;
    grid-area: 1/8/2/13;
  }
  @media screen and (min-width: 1366px) and (orientation: landscape) {
    grid-area: 1/9/2/13;
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: flex;
    grid-area: 1/8/2/13;
  }
`;
export const StyledMenuItem = styled(motion.div)`
  cursor: pointer;
  transition: 0.3s;
  scale: ${(props) => (props.current ? 1.1 : 1)}

  :hover {
    scale: 1.1;
  }
  :hover hr {
    scale: 1;
  }
`;
export const StyledMenuItemLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 180%;

  color: ${(props) =>
    props.isdark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xs};
  }
`;
export const StyledMenuItemUnderLine = styled(motion.div)`
  transform-origin: left;
  transition: 0.3s;
  border-bottom: 2px solid
    ${(props) =>
      props.isdark ? props.theme.colors.light : props.theme.colors.dark};
`;
