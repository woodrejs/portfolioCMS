import React from "react";
import { DATA } from "../Nav.data";
import { useCounter } from "../../../utils/sweet_state";
import { useLocation } from "react-router-dom";
import { variants_underline, variants_main } from "../../../utils/motion";
import {
  StyledMenu,
  StyledItem,
  StyledLink,
  StyledLine,
} from "./MenuDeskop.css";

const MenuDeskop = () => {
  const [{ isdark }] = useCounter();
  const pathname = useLocation().pathname;

  return (
    <StyledMenu>
      {DATA.map(({ id, name, path }) => (
        <StyledItem
          key={id}
          variants={variants_main}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <StyledLink to={path} children={name} isdark={isdark} />
          <StyledLine
            variants={variants_underline}
            animate={path === pathname ? "visible" : "hidden"}
            exit="hidden"
            isdark={isdark}
          />
        </StyledItem>
      ))}
    </StyledMenu>
  );
};

export default MenuDeskop;
