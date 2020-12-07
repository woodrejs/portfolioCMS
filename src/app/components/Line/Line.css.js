import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledLine = styled(motion.div)`
  width: 100%;
  transform-origin: left;
  border-bottom: 1px solid
    ${(props) =>
      props.isdark
        ? (props) => props.theme.colors.light
        : (props) => props.theme.colors.dark};
`;
