import React from "react";
import StyledBackdrop from "./StyledBackdrop";

const Backdrop = (props: any) =>
  props.isShow ? (
    <StyledBackdrop onClick={props.clicked}></StyledBackdrop>
  ) : null;

export default Backdrop;
