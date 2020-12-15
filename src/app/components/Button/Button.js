import React from "react";
import { useInView } from "react-intersection-observer";
import { variants_arrow, variants_main } from "../../utils/motion/index";
import { useCounter } from "../../utils/sweet_state";
import LightArrowIcon from "../../../assets/icons/light_arrow_icon.svg";
import DarkArrowIcon from "../../../assets/icons/dark_arrow_icon.svg";
import {
  StyledArrowBox,
  StyledArrow,
  StyledButton,
  StyledText,
} from "./Button.css";

const Button = ({
  title,
  isSmall = true,
  to,
  invertArrow = false,
  className,
  white = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [{ isdark }] = useCounter();

  return (
    <StyledButton ref={ref} to={to} className={className}>
      <StyledText
        children={title}
        isSmall={isSmall}
        isdark={white ? white : isdark}
        variants={variants_main}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        whileHover="hover"
      />

      <StyledArrowBox invertArrow={invertArrow}>
        <StyledArrow
          src={(white ? white : isdark) ? LightArrowIcon : DarkArrowIcon}
          alt="arrow_icon"
          variants={variants_arrow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
        />
      </StyledArrowBox>
    </StyledButton>
  );
};

export default Button;
