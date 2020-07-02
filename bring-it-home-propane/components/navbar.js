import styled from "styled-components";
import theme from "../public/theme";
import Hamburger from "../components/hamburger";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding: 6.5px 10px;
  background-color: ${theme.brandBlue};
  color: ${theme.brandOffWhite};
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    height: 60px;
    font-size: 20px;
    padding: 10px 10px;
  }
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

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <Hamburger></Hamburger>
      </NavbarItem>
      <NavbarItem>Bring It Home Propane</NavbarItem>
      <NavbarItem button="true">Order Now</NavbarItem>
    </NavbarWrapper>
  );
}
