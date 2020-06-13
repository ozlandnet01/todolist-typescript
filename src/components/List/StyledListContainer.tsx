import styled from "styled-components";

const ListStyledContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
  justify-content: center;
`;

export default ListStyledContainer;
