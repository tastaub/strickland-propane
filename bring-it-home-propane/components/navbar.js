import styled from "styled-components";
import theme from "../public/theme";
import Hamburger from "../components/hamburger";

const NavbarWrapper = styled.div`
  font-size: 14px;
  padding: 10px 10px 10px 0px;
  background-color: ${theme.brandBlue};
  color: ${theme.brandOffWhite};
  display: flex;
  justify-content: space-between;
`;

const NavbarItem = styled.div`
  padding: 6.5px 10px;
  ${({ button }) => {
    if (button) {
      return `
      color: ${theme.brandBlue};
      background-color: ${theme.brandOffWhite};
      border-radius: 9px;
      `;
    }
  }}
  @media only screen and (min-width: 600px) {
    padding: 10px 10px;
  }
`;

const MenuAccordion = styled.div`
  background: #333;
  height: 0;
  display: none;

  &.active {
    transition: all 2s ease-in;
    display: flex;
    height: auto;
  }
`;

export default function Navbar() {
  return (
    <div>
      <NavbarWrapper>
        <NavbarItem>
          <Hamburger />
        </NavbarItem>
        <NavbarItem button="true">Order Now</NavbarItem>
      </NavbarWrapper>
      <MenuAccordion id="accordion">
        <h1>Hello</h1>
      </MenuAccordion>
    </div>
  );
}
