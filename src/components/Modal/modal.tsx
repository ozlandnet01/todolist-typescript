import React from "react";
import StyledModal from "./StyledModal";
import Backdrop from "../Backdrop/backdrop";
import AuxComponent from "../../hoc/AuxComponent";

function Modal(props: any) {
  return (
    <AuxComponent>
      <Backdrop isShow={props.isShow} clicked={props.clicked}></Backdrop>
      <StyledModal isShow={props.isShow}>{props.children}</StyledModal>
    </AuxComponent>
  );
}

export default Modal;
