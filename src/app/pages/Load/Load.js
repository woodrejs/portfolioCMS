import React, { useEffect } from "react";
import { useCounter } from "../../utils/sweet_state";
import Loader from "react-loader-spinner";
import { StyledBox, StyledTitle } from "./Load.css";

const Load = () => {
  const [{ projects, isdark }, { setLoaded }] = useCounter();

  useEffect(
    () =>
      projects &&
      setTimeout(() => {
        setLoaded();
      }, 300),
    [projects]
  );

  return (
    <StyledBox isdark={isdark} animate={{ opacity: projects ? 0 : 1 }}>
      <StyledTitle title="Loading ..." size="s" />
      <Loader
        type="Rings"
        color={isdark ? "#f5f5f5" : "#150E0E"}
        height={120}
        width={120}
        timeout={15000}
      />
    </StyledBox>
  );
};
export default Load;
