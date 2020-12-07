import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "../../components/Title";

export const StyledBox = styled(motion.div)`
  background: ${(props) =>
    props.isdark ? props.theme.colors.dark : props.theme.colors.bck};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTitle = styled(Title)`
  position: absolute;
  bottom: 1vh;
  right: 2vw;
  text-align: right;
`;
