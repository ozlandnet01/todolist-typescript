import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: content-box;
  padding: 0;
  border: none;
  margin: 0 15px;
  font-size: 30px;
  background-color: #fff;
  border-radius: 10px;
  display: block;
  height: 36px;
  width: 36px;
  transition: all 0.3s;
  background-color: inherit;
  color: ${({ theme }) => theme.primaryColor};
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  }

  &:focus {
    border: none;
  }
`;

export default StyledButton;
