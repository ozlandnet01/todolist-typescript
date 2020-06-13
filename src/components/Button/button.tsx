import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = (props: any) => {
  // Render an anchor tag
  return <StyledButton>{props.children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
