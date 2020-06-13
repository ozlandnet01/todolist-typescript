import React from "react";
import SearchInput from "../../components/SearchInput/searchInput";
import InputLayoutStyle from "./InputLayoutStyle";

function InputLayout(props: any) {
  // Render an anchor tag
  const componentLayout = (
    <InputLayoutStyle>
      <SearchInput />
    </InputLayoutStyle>
  );
  return componentLayout;
}

export default InputLayout;
