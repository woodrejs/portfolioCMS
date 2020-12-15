import React from "react";
import { useCounter } from "../../utils/sweet_state";
import { variants_main } from "../../utils/motion/main.motion";
import { StyledTitle } from "./Title.css";

const Title = ({ size, className, title, delay = 0 }) => {
  const [{ isdark }] = useCounter();

  return (
    <StyledTitle
      className={className}
      children={title}
      isdark={isdark}
      size={size}
      custom={delay}
      variants={variants_main}
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
  );
};

export default Title;
