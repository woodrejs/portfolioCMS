import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.custom(Link))`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
`;
export const StyledTextBox = styled.div`
  overflow: hidden;
`;
export const StyledText = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};

  font-size: ${(props) =>
    props.isSmall ? props.theme.size.xs : props.theme.size.l};

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) =>
      props.isSmall ? props.theme.size.s : props.theme.size.xxl};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxl};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxxl};
  }
`;
export const StyledArrowBox = styled(motion.div)`
  transform: rotateZ(${(props) => (props.invertArrow ? 180 : 0)}deg);
`;
export const StyledArrow = styled(motion.img)`
  transform-origin: left;
`;
