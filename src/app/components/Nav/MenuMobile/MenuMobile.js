import React, { useState } from "react";
import { DATA } from "../Nav.data";
import { useCounter } from "../../../utils/sweet_state";
import {
  variants_main,
  variants_menuMobile,
} from "../../../utils/motion/index";
import {
  StyledHamburger,
  StyledHamburgerName,
  StyledHamburgerIcon,
  StyledMobileMenu,
  StyledMobileMenuCloseBtn,
  StyledMobileMenuBox,
  StyledMobileMenuItem,
  StyledMobileMenuLink,
} from "./MenuMobile.css";
import CloseDarkIcon from "../../../../assets/icons/Close_Dark.svg";
import CloseLightIcon from "../../../../assets/icons/Close_Light.svg";
import CrossDarkIcon from "../../../../assets/icons/dark_cross_icon.svg";
import CrossLightIcon from "../../../../assets/icons/light_cross_icon.svg";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ isdark }] = useCounter();
  const handleHamburger = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledHamburger
        onClick={handleHamburger}
        variants={variants_main}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledHamburgerName
          children="Menu"
          isdark={isdark}
          variants={variants_main}
          whileHover="hover"
        />
        <StyledHamburgerIcon
          src={isdark ? CrossLightIcon : CrossDarkIcon}
          variants={variants_main}
          alt="hamburger_icon"
          whileHover="hover"
        />
      </StyledHamburger>
      <StyledMobileMenu
        isdark={isdark}
        variants={variants_menuMobile}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <StyledMobileMenuCloseBtn
          src={isdark ? CloseDarkIcon : CloseLightIcon}
          onClick={handleHamburger}
          alt="close_icon"
          whileHover={{ scale: 1.15 }}
        />

        <StyledMobileMenuBox
          variants={variants_main}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          {DATA.map((item, index) => (
            <StyledMobileMenuItem
              key={`${item.id}${Math.random()}`}
              custom={index}
              variants={variants_main}
              whileHover="hover"
            >
              <StyledMobileMenuLink
                to={item.path}
                children={item.name}
                isdark={isdark}
              />
            </StyledMobileMenuItem>
          ))}
        </StyledMobileMenuBox>
      </StyledMobileMenu>
    </>
  );
};
export default MenuMobile;
