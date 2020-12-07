import React from "react";
import { useInView } from "react-intersection-observer";
import { DATA } from "./Social.data";
import { variants_title } from "../../utils/motion/index";
import { StyledSocial, StyledSocialBox, StyledSocialItem } from "./Social.css";
import { useCounter } from "../../utils/sweet_state";

const Social = ({ className }) => {
  const [state] = useCounter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <StyledSocial className={className} ref={ref}>
      <StyledSocialBox>
        {DATA.map(({ name, id, href }) => (
          <StyledSocialItem
            children={name}
            key={id}
            isdark={state.isdark}
            href={href}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        ))}
      </StyledSocialBox>
    </StyledSocial>
  );
};
export default Social;
