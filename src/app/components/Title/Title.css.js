import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTitle = styled(motion.h2)`
  font-weight: 600;
  text-transform: uppercase;
  transform-origin: top left !important;
  color: ${(props) =>
    props.isdark ? props.theme.colors.light : props.theme.colors.dark};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "s":
        return theme.size.l;
      case "m":
        return theme.size.xl;
      case "l":
        return theme.size.xxxl;
      default:
        return theme.size.l;
    }
  }};
  line-height: ${({ size }) => (size === "l" ? "82.68%" : "98.18%")};
  letter-spacing: ${({ size }) => (size === "l" ? "-0.05em" : "0")};
  margin-bottom: ${({ size }) => (size === "m" ? "5px" : "0")};

  @media screen and (min-width: 414px) and (orientation: portrait) {
    font-size: ${({ size, theme }) => size === "l" && theme.size.xxxxl};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${({ size, theme }) => {
      if (size === "l") return theme.size.xxxxxxl;
      if (size === "m") return theme.size.xxxl;
    }};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${({ size, theme }) => size === "l" && theme.size.xxxxxxxl};
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => size === "l" && theme.size.xxxxxl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => {
      if (size === "l") return theme.size.xxxxxxxl;
      if (size === "m") return theme.size.xxl;
    }};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => {
      if (size === "l") return theme.size.xxxxxxxxl;
      if (size === "m") return theme.size.xxxl;
    }};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => size === "l" && "180px"};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => size === "m" && theme.size.xxxxxl};
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    font-size: ${({ size, theme }) => size === "l" && theme.size.xxxxxxxxxl};
  }
`;
