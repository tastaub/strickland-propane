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
`;

export default function Hamburger() {
  return (
    <Container>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  );
}
