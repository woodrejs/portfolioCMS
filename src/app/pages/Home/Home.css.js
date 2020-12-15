import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StyledBck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bck};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vw;
`;
export const StyledSection = styled.section`
  max-width: 1366px;
  background: ${(props) => props.theme.colors.bck};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr auto 5vh;
  height: calc(100vh - 90px);

  @media screen and (orientation: landscape) {
    height: 100vh;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    height: calc(100vh - 90px);
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(100vh - 130px);
  }
`;
export const StyledTitle = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 1rem;
`;
export const StyledSubTitle = styled(Title)`
  grid-area: 1/1/2/13;
  justify-self: end;
  align-self: end;
  margin-bottom: 0.1em;
  font-weight: 400;
  transform-origin: top left;
`;
export const StyledPhotoBox = styled(Link)`
  grid-area: 2/1/4/13;
  align-self: end;
  height: 50vh;
  overflow: hidden;
  transform-origin: top left;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    height: 60vh;
  }
  @media screen and (orientation: landscape) {
    height: 50vh;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    height: 30vh;
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    height: 25vh;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    height: 30vh;
  }
`;
export const StyledPhoto = styled(motion.img)`
  width: 100%;
  transform-origin: top left;
`;
export const StyledButton = styled(Button)`
  grid-area: 2/2/3/13;
  align-self: end;
  justify-self: start;
  z-index: 1;
`;
