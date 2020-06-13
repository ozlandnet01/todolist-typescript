import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding: 7px;
  border-radius: 5px;
  width: 30%;
  transition: all 1s;
  background-color: #fff;

  &:active {
    border-color: ${({ theme }) => theme.primaryColor};
    font-size: 20px;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.primaryColor};
    font-size: 18px;
  }
`;

export default Wrapper;
