import React from "react";
import MenuDeskop from "./MenuDeskop";
import MenuMobile from "./MenuMobile";
import { useLocation } from "react-router-dom";
import { useCounter } from "../../utils/sweet_state";
import { variants_list } from "../../utils/motion/list.motion";
import CopywriterLightIcon from "../../../assets/icons/light_copywriter_icon.svg";
import CopywriterDarkIcon from "../../../assets/icons/dark_copywriter_icon.svg";
import {
  StyledNav,
  StyledBrand,
  StyledBrandIcon,
  StyledBrandName,
  StyledLine,
} from "./Nav.css";

const Nav = () => {
  const [{ isdark }] = useCounter();
  const pathname = useLocation().pathname;

  return (
    <StyledNav isdark={isdark}>
      <StyledBrand
        to="/"
        variants={variants_list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledBrandIcon
          src={isdark ? CopywriterLightIcon : CopywriterDarkIcon}
          alt="copywriter_icon"
        />
        <StyledBrandName children="Maciej Szczepański" isdark={isdark} />
      </StyledBrand>
      <MenuDeskop pathname={pathname} />
      <MenuMobile />
      <StyledLine />
    </StyledNav>
  );
};

export default Nav;
