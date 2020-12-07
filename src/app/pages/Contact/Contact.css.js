import styled from "styled-components";
import Button from "../../components/Button";
import Social from "../../components/Social";
import Line from "../../components/Line";
import Title from "../../components/Title";
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 5fr 2fr auto;

  height: calc(100vh - 90px);
  @media screen and (min-width: 600px) and (orientation: portrait) {
    height: calc(100vh - 130px);
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(100vh - 130px);
  }
`;
export const StyledTitle = styled(Title)`
  grid-area: 1/1/2/13;
  align-self: end;
  word-wrap: break-word;
  max-width: 28ch;

  @media screen and (min-width: 568px) and (orientation: landscape) {
    max-width: unset;
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    max-width: 40ch;
  }
`;
export const StyledText = styled(motion.p)`
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xxs};
  color: ${(props) => props.theme.colors.dark};
  line-height: 160%;
  max-width: 45ch;

  grid-area: 2/1/3/13;
  align-self: start;
  margin-top: 1em;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 600px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    margin-top: 2em;
  }
`;
export const StyledLine = styled(Line)`
  grid-area: 4/1/5/13;
  align-self: start;
`;
export const StyledSocial = styled(Social)`
  grid-area: 4/1/5/13;
  align-self: start;
  margin-top: 0.2em;

  @media screen and (orientation: landscape) {
    justify-content: flex-start;
  }
`;
export const StyledButton = styled(Button)`
  grid-area: 3/1/4/13;
`;
