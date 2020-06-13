import styled from "styled-components";

const StyledNavBarLayout = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  box-shadow: rgba(0, 0, 0, 0.07) 2px 4px 6px -1px;
  height: 56px;
  top: 0;
  margin-bottom: 12px;
`;

export default StyledNavBarLayout;
