import React from "react";
import SearchInput from "../../components/SearchInput/searchInput";
import StyledNavBarLayout from "./StyledNavBarLayout";
import NewTaskButton from "../../components/NewTaskButton/newTaskButton";

function NavigationBar(props: any) {
  // Render an anchor tag
  const componentLayout = (
    <StyledNavBarLayout>
      <div style={{ flex: 1 }}></div>
      <SearchInput onSearchTyped={props.onSearchTyped} />
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <NewTaskButton onAddNewTaskClicked={props.onAddNewTaskClicked} />
      </div>
    </StyledNavBarLayout>
  );
  return componentLayout;
}

export default NavigationBar;
