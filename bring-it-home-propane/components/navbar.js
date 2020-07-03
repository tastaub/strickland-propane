import styled from "styled-components";
import theme from "../public/theme";
import Hamburger from "../components/hamburger";

const NavbarWrapper = styled.div`
  font-size: 14px;
  padding: 10px 10px 15px 0px;
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
      font-weight: 900;
      margin-top: 5px;
      padding: 4.5px 10px;
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

const TitleMenu = styled.div`
  background: ${theme.brandOffWhite};
  color: ${theme.brandBlue};
  font-weight: 900;
  display: flex;
  justify-content: space-between;

  div {
    padding: 10px;
  }

  .phone-item {
    padding: 5px;
    background: ${theme.brandBlue};
    color: ${theme.brandOffWhite};
    border: 5px solid ${theme.brandOffWhite};

    &:hover {
      background: ${theme.brandOffWhite};
      color: ${theme.brandBlue};
      border: 5px solid ${theme.brandBlue};
    }

    div {
      display: none;
      padding: 0;
    }

    i {
      display: block;
    }
  }

  @media only screen and (min-width: 600px) {
    .phone-item {
      div {
        display: block;
      }

      i {
        display: none;
      }
    }
  }
`;

const MenuAccordion = styled.div`
  background: #333;
  max-height: 0;
  display: block;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;

  &.active {
    display: flex;
    max-height: 99em;
    display: block;
    transition: max-height 0.5s ease-in-out;
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
      <TitleMenu>
        <div>Bring it home Propane</div>
        <div className="phone-item">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <div>555-555-5555</div>
        </div>
      </TitleMenu>
      <MenuAccordion id="accordion">
        <h1>Hello</h1>
      </MenuAccordion>
    </div>
  );
}
