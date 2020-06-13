import React from "react";
import styled from "styled-components";
const CheckboxContainer = styled.div`
  display: inline;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
  position: absolute;
`;

interface CheckboxProps {
  checked: boolean;
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.label<CheckboxProps>`
  display: inline-block;
  width: 28px;
  height: 28px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 100%;
  transition: all 150ms;
  position: relative;
  cursor: pointer;

  :active {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

function CheckBox(props: any) {
  return (
    <CheckboxContainer>
      <StyledCheckbox checked={props.checked}>
        <HiddenCheckbox
          checked={props.checked}
          onChange={() => {
            props.onChangeTaskStatus(props.id);
          }}
        />
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default CheckBox;
