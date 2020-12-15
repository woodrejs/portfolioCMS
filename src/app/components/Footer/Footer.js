import React from "react";
import {
  StyledFooter,
  StyledLine,
  StyledButtonBox,
  StyledButton,
  StyledSocial,
} from "./Footer.css";

const Footer = ({ className, btn1, btn2 }) => {
  return (
    <StyledFooter className={className}>
      <StyledLine />

      <StyledButtonBox>
        <StyledButton title={btn1.name} to={btn1.link} isSmall={false} />
        <StyledButton title={btn2.name} to={btn2.link} isSmall={false} />
      </StyledButtonBox>

      <StyledSocial />
    </StyledFooter>
  );
};
export default Footer;
