import React from "react";
import Nav from "../../components/Nav";
import { variants_text } from "../../utils/motion/index";
import { DATA } from "./Contact.data";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledText,
  StyledLine,
  StyledSocial,
  StyledButton,
} from "./Contact.css";

const Contact = () => {
  return (
    <StyledBck>
      <Nav />
      <StyledSection>
        <StyledTitle size="m" title="m.szczepanski@gmail.com" />
        <StyledText
          children={DATA.text}
          variants={variants_text}
          animate="visible"
          initial="hidden"
          exit="hidden"
        />
        <StyledButton isSmall={true} title="portfolio" to="/portfolio" />
        <StyledLine />
        <StyledSocial />
      </StyledSection>
    </StyledBck>
  );
};

export default Contact;
