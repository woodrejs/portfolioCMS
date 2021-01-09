import styled from "styled-components";
import Button from "../Button";
import { motion } from "framer-motion";
import Line from "../Line";
import { Link } from "react-router-dom";

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
  transform-origin: top left;
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
export const StyledPhotoBox = styled(motion.div)`
  grid-area: 2/1/3/13;
  align-self: start;
  transform-origin: top left;
  overflow: hidden;
  height: 80vh;
  display: flex;
  align-items: flex-end;

  @media screen and (orientation: landscape) {
    height: 75vh;
    grid-area: 2/9/3/13;
  }
`;
export const StyledLink = styled(Link)`
  overflow: hidden;
`;
export const StyledPhoto = styled(motion.img)`
  width: 100%;
  min-height: 100%;
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
export const StyledData = styled(motion.span)`
  grid-area: ${({ option }) => {
    switch (option) {
      case "dateLable":
        return "1/5/2/6";
      case "date":
        return "1/7/2/8";
      case "typeLable":
        return "2/5/3/6";
      case "type":
        return "2/7/3/8";
      default:
        break;
    }
  }};
  transform-origin: top left;
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
