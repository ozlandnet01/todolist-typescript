import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  width: 65%;
  padding: 10px 5% 0px;
  margin: 0;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

export default StyledList;
