import React from "react";
import {
  StyledFooter,
  StyledLine,
  StyledButtonBox,
  StyledButton,
  StyledSocial,
} from "./Footer.css";

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <StyledLine />

      <StyledButtonBox>
        <StyledButton title="portfolio" to="/portfolio" isSmall={false} />
        <StyledButton title="kontakt" to="/contact" isSmall={false} />
      </StyledButtonBox>

      <StyledSocial />
    </StyledFooter>
  );
};
export default Footer;
