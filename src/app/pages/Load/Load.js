import React from "react";
import { useCounter } from "../../utils/sweet_state";
import Loader from "react-loader-spinner";
import { StyledBox, StyledTitle } from "./Load.css";

const Load = () => {
  const [{ isdark, loaded }] = useCounter();

  return (
    <StyledBox isdark={isdark} animate={{ opacity: loaded ? 0 : 1 }}>
      <StyledTitle title="Loading ..." size="s" />
      <Loader
        type="Rings"
        color={isdark ? "#f5f5f5" : "#150E0E"}
        height={120}
        width={120}
        timeout={10000}
      />
    </StyledBox>
  );
};
export default Load;
