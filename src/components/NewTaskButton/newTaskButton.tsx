import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import StyledNewTaskButton from "./StyledNewTaskButton";

function NewTaskButton(props: any) {
  // Render an anchor tag
  return (
    <StyledNewTaskButton onClick={props.onAddNewTaskClicked}>
      <PlusOutlined style={{}} />
    </StyledNewTaskButton>
  );
}

export default NewTaskButton;
