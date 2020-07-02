import styled from "styled-components";
import theme from "../public/theme";

const Container = styled.div`
  display: block;
`;

const Line = styled.div`
  width: 24px;
  height: 4px;
  background: ${theme.brandOffWhite};
  border-radius: 2px;
  margin: 3px;
  transition: all 0.3s linear;

  &.clicked:nth-child(1) {
    display: absolute;
    top: 10%;
    transform: rotate(45deg) translateX(5px) translateY(1px);
  }

  &.clicked:nth-child(2) {
    transform: rotate(135deg) translateX(-4px) translateY(1px);
  }

  &.clicked:nth-child(3) {
    display: none;
  }
`;

export default function Hamburger() {
  function animateMenu(event) {
    event.preventDefault();
    const children = Array.from(event.currentTarget.children);
    console.log("children", children);
    children.forEach((element) => {
      element.classList.toggle("clicked");
    });
  }

  return (
    <Container onClick={animateMenu}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  );
}
