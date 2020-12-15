import React from "react";
import MenuDeskop from "./MenuDeskop";
import MenuMobile from "./MenuMobile";
import { useCounter } from "../../utils/sweet_state";
import { variants_main } from "../../utils/motion/main.motion";
import CopywriterLightIcon from "../../../assets/icons/light_copywriter_icon.svg";
import CopywriterDarkIcon from "../../../assets/icons/dark_copywriter_icon.svg";
import {
  StyledNav,
  StyledBox,
  StyledIcon,
  StyledName,
  StyledLine,
} from "./Nav.css";

const Nav = () => {
  const [{ isdark }] = useCounter();

  return (
    <StyledNav isdark={isdark}>
      <StyledBox
        to="/"
        variants={variants_main}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledIcon
          src={isdark ? CopywriterLightIcon : CopywriterDarkIcon}
          alt="copywriter_icon"
        />
        <StyledName children="Maciej Szczepański" isdark={isdark} />
      </StyledBox>

      <MenuDeskop />

      <MenuMobile />
      <StyledLine />
    </StyledNav>
  );
};

export default Nav;
