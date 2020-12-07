import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTitle = styled.div``;
export const StyledBox = styled.div`
  overflow: hidden;
`;
export const StyledH1 = styled(motion.h1)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xxxl};
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};
  line-height: 82.68%;
  letter-spacing: -0.05em;
  text-transform: uppercase;

  @media screen and (min-width: 414px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxl};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxxxl};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxxxxl};
  }

  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxl};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxxl};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: 180px;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxxxl};
  }
`;
export const StyledH2 = styled(motion.h2)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xl};
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.daark};
  line-height: 98.18%;
  margin-bottom: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxl};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxl};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxl};
  }
`;
export const StyledH3 = styled(motion.h3)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.l};
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};
  line-height: 98.18%;

  text-transform: uppercase;
`;
