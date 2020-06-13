import styled from "styled-components";
import React from "react";
import CheckBox from "../Checkbox/StyledCheckbox";

const StyledListItem = styled.li`
  display: flex;
  border-bottom: 1px solid rgba(49, 53, 59, 0.12);
  font-size: x-large;
  font-family: sans-serif;
  margin: 20px;
`;

const StyledLabelTodoList = styled.span`
  margin-left: 20px;
`;

function ListItem(props: any) {
  return (
    <StyledListItem>
      <CheckBox {...props}></CheckBox>
      <StyledLabelTodoList>{props.children}</StyledLabelTodoList>
    </StyledListItem>
  );
}

export default ListItem;
