import React from "react";
import { InView } from "react-intersection-observer";
import { StyledLine } from "./Line.css";
import { variants_line } from "../../utils/motion/index";
import { useCounter } from "../../utils/sweet_state";

const Line = ({ className }) => {
  const [state] = useCounter();

  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <StyledLine
          ref={ref}
          className={className}
          isdark={state.isdark}
          variants={variants_line}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
        />
      )}
    </InView>
  );
};

export default Line;
