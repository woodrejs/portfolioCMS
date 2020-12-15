import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
  display: flex;

  @media screen (orientation: landscape) {
    justify-content: flex-start;
  }
`;
export const StyledSocialItem = styled(motion.a)`
  font-weight: 600;
  line-height: 165%;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 1em;
  transform-origin: top left;
  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};
`;
