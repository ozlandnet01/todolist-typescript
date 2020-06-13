import React from "react";
import StyledListContainer from "./StyledListContainer";
import StyledList from "./StyledList";
import ListItem from "./StyledListItem";

function ListContainer(props: any) {
  const tasks = props.task;
  const listItems = tasks.map((task: any) => {
    return (
      <ListItem
        checked={task.status}
        key={task.id}
        id={task.id}
        onChangeTaskStatus={props.onChangeTaskStatus}
      >
        {task.toDo}
      </ListItem>
    );
  });

  return (
    <StyledListContainer>
      <StyledList>{listItems}</StyledList>
    </StyledListContainer>
  );
}

export default ListContainer;
