import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
`;
export const StyledSocialBox = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-width: 360px;
  min-width: 300px;
`;
export const StyledSocialItem = styled(motion.a)`
  font-weight: 600;
  line-height: 165%;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 1em;

  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};
`;
