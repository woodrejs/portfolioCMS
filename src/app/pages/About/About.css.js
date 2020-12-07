import Title from "../../components/Title";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBck = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${(props) => props.theme.colors.dark};
  padding: 0 3vw;
  overflow: hidden;
  :first-child {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const StyledSection = styled.section`
  max-width: 1366px;
  @media screen and (orientation: landscape) {
    padding-top: 3em;
  }
`;
export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 70vh auto;

  @media screen and (orientation: landscape) {
    grid-template-rows: 135vh auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 75vh auto;
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    grid-template-rows: 100vh auto;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    grid-template-rows: 80vh auto;
  }
`;
export const StyledTitle = styled(Title)`
  grid-area: 1/1/2/13;
  margin: 3em 0;
  z-index: 1;
  @media screen and (orientation: landscape) {
    grid-area: 1/1/2/7;
    justify-self: end;
    margin-top: 1em;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 1/1/2/8;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    margin-top: 5em;
    grid-area: 1/1/2/9;
  }
`;
export const StyledPhoto = styled(motion.img)`
  width: 100%;

  transform-origin: bottom;
`;
export const StyledPhotoBox = styled.div`
  grid-area: 2/1/3/13;
  width: 100%;

  overflow: hidden;

  @media screen and (orientation: landscape) {
    grid-area: 1/6/2/13;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 1/7/2/13;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    grid-area: 1/8/2/13;
  }
`;
export const StyledTextBox = styled.div`
  grid-area: 3/1/4/13;
  margin: -1.5em 0 5em 0;
  z-index: 1;
  @media screen and (orientation: landscape) {
    grid-area: 2/5/3/13;
    margin: -3.5em 0 8em 0;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 2/6/3/13;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    margin: -6.5em 0 8em 0;
    grid-area: 2/7/3/13;
  }
`;
export const StyledSubTitle = styled(Title)`
  margin: 0 0 1em 0;

  @media screen and (orientation: landscape) {
    max-width: 42vw;
  }
`;
export const StyledSubTitleOutline = styled(Title)`
  margin-bottom: 4em;
  z-index: 1;
  -webkit-text-fill-color: ${(props) => props.theme.colors.dark};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.light};
`;
export const StyledThirdTitle = styled(Title)`
  margin-bottom: 3em;
`;
export const StyledText = styled(motion.p)`
  margin-bottom: 5em;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) => props.theme.colors.light};
  line-height: 180%;
  transform-origin: top left;

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 736px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.m};
  }
`;
