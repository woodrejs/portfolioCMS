import React from "react";
import { DATA } from "../Nav.data";
import { useCounter } from "../../../utils/sweet_state";
import {
  variants_list,
  variants_item,
  variants_underline,
} from "../../../utils/motion";
import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemLink,
  StyledMenuItemUnderLine,
} from "./MenuDeskop.css";

const MenuDeskop = ({ pathname }) => {
  const [state] = useCounter();

  return (
    <StyledMenu
      variants={variants_list}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {DATA.map((item, index) => (
        <StyledMenuItem key={item.id} variants={variants_item} custom={index}>
          <StyledMenuItemLink
            to={item.path}
            children={item.name}
            isdark={state.isdark}
          />
          <StyledMenuItemUnderLine
            variants={variants_underline}
            animate={item.path === pathname ? "visible" : "hidden"}
            exit="hidden"
            isdark={state.isdark}
            custom={index}
          />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default MenuDeskop;
