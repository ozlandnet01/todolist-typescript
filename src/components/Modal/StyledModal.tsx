import styled from "styled-components";

interface ModalProps {
  isShow: boolean;
}

const StyledModal = styled.div<ModalProps>`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: ${(props) =>
    props.isShow ? "translateY(0vh)" : "translateY(-100vh)"};
  opacity: ${(props) => (props.isShow ? "1" : "0")};

  height: ${(props) => (props.isShow ? "40%" : "0")};
  display: flex;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default StyledModal;
