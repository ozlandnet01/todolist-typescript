import React from "react";
import StyledNewTodoLayout from "./StyledNewTodoLayout";
import StyledTodoListInput from "../TodoInput/StyledTodoListInput";

import Button from "../Button/StyledButton";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 10px 25px;
  width: 35%;
  align-self: center;
`;

const AddTodoLayout = (props: any) => {
  return (
    <StyledNewTodoLayout>
      <StyledTodoListInput></StyledTodoListInput>
      <StyledButton>Submit New To Do</StyledButton>
    </StyledNewTodoLayout>
  );
};

export default AddTodoLayout;
