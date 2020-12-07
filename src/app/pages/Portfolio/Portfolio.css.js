import styled from "styled-components";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export const StyledBck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bck};
  padding: 0 3vw;

  :first-child {
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const StyledSection = styled.section`
  max-width: 1366px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40vh auto auto;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    grid-template-rows: 40vh auto auto;
  }
  @media screen and (orientation: landscape) {
    grid-template-rows: 60vh auto auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 70vh auto auto;
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    grid-template-rows: 75vh auto auto;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    grid-template-rows: 80vh auto auto;
  }
`;
export const StyledTitle = styled(Title)`
  grid-area: 1/1/2/13;
  align-self: start;
  margin-top: 5vh;
`;
export const StyledSubTitleBox = styled.div`
  overflow: hidden;
  grid-area: 1/1/2/13;
  justify-self: end;
  align-self: end;
`;
export const StyledSubTitle = styled(motion.h4)`
  width: 100%;
  text-align: right;

  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 160%;
  text-transform: uppercase;
  margin-bottom: 0.5em;

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
export const StyledProjectsBox = styled.div`
  grid-area: 2/1/3/13;
`;
export const StyledFooter = styled(Footer)`
  grid-area: 3/1/4/13;
`;
