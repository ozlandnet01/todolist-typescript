import React from "react";
import StyledSearchInput from "./StyledSearchInput";
import Wrapper from "./Wrapper";
import { withTheme } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

function SearchInput(props: any) {
  // Render an anchor tag
  return (
    <Wrapper>
      <StyledSearchInput
        type="text"
        placeholder="mxstbr"
        value={props.text}
        onChange={(e) => props.onSearchTyped(e)}
      />
      <SearchOutlined style={{ color: props.theme.primaryColor }} />
    </Wrapper>
  );
}

export default withTheme(SearchInput);
