import styled from "styled-components";
import Button from "../Button";
import { motion } from "framer-motion";
import Line from "../Line";

export const StyledArticle = styled(motion.article)`
  min-height: 50vh;
  @media screen and (orientation: landscape) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1em auto 1em;
    height: unset;
  }
`;
export const StyledInfoBox = styled(motion.div)`
  grid-area: 2/1/3/13;
  justify-self: start;
  align-self: start;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 4vh);
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};

  @media screen and (orientation: portrait) {
    display: none;
  }
`;
export const StyledTitle = styled(motion.h3)`
  grid-area: 1/1/2/4;
  display: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledDate = styled(motion.span)`
  grid-area: 1/5/2/6;
  display: none;

  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledType = styled(motion.span)`
  grid-area: 2/5/3/6;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledDateData = styled(motion.span)`
  grid-area: 1/7/2/8;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledTypeData = styled(motion.span)`
  grid-area: 2/7/3/8;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledNumber = styled(motion.div)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.s};
  line-height: 100%;
  text-transform: uppercase;
  margin: 1em 0;

  @media screen and (orientation: landscape) {
    grid-area: 2/1/3/13;
    justify-self: start;
    align-self: end;
    margin: 0;
  }
`;
export const StyledPhotoBox = styled.div`
  grid-area: 2/1/3/13;
  align-self: start;
  transform-origin: bottom;
  overflow: hidden;

  @media screen and (orientation: landscape) {
    grid-area: 2/9/3/13;
  }
`;
export const StyledPhoto = styled(motion.img)`
  width: 100%;
`;
export const StyledButton = styled(Button)`
  margin: 1em 0;
  @media screen and (orientation: landscape) {
    display: none !important;
  }
`;
export const StyledLine = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: start;
`;
