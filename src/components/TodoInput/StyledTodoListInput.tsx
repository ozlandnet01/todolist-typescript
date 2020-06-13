import styled from "styled-components";

const StyledTodoListInput = styled.textarea`
  flex: 1;
  outline: none;
  border: 1px solid rgba(65, 173, 221, 0.5);
  padding: 7px;
  border-radius: 5px;
  transition: all 1s;
  background-color: #fff;
  resize: none;
  font-size: 22px;

  &:active {
    border-color: ${({ theme }) => theme.primaryColor};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

export default StyledTodoListInput;
