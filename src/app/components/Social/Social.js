import React from "react";
import { useInView } from "react-intersection-observer";
import { DATA } from "./Social.data";
import { variants_main } from "../../utils/motion/main.motion";
import { StyledSocial, StyledSocialItem } from "./Social.css";
import { useCounter } from "../../utils/sweet_state";

const Social = ({ className }) => {
  const [state] = useCounter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <StyledSocial className={className} ref={ref}>
      {DATA.map(({ name, id, href }) => (
        <StyledSocialItem
          children={name}
          key={id}
          isdark={state.isdark}
          href={href}
          variants={variants_main}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
        />
      ))}
    </StyledSocial>
  );
};
export default Social;
