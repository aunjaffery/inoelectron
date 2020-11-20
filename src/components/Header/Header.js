import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink, Button } from "react-bootstrap";
import styled from "styled-components";

const StyNavbar = styled(Navbar)`
  background: ${(props) => props.theme.backgroundgd};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  padding: 1rem 1rem;
`;
const StyBrand = styled(NavbarBrand)`
  color: ${(props) => props.theme.textcolor};
  font-weight: 700;
  padding-right: 20px;
  font-size: 28px;
  padding-top: 0;
`;
const StyNav = styled(Nav)`
  color: ${(props) => props.theme.textcolor};
`;
const StyLink = styled(NavLink)`
  color: ${(props) => props.theme.textcolor};
`;
const StyButton = styled(Button)`
  padding: 08px 30px;
  font-weight: 600;
`;

const Header = (props) => {
  return (
    <div>
      <StyNavbar expand="md">
        <div className="container">
          <StyBrand href="#home">Slack</StyBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <StyNav className="mr-auto">
              <StyLink href="#home">Home</StyLink>
              <StyLink href="#link">Solution</StyLink>
              <StyLink href="#link">Resources</StyLink>
              <StyLink href="#link">Enterprise</StyLink>
              <StyLink href="#link">Pricing</StyLink>
            </StyNav>
            <Nav>
              <StyButton
                variant={props.nowtheme === "Dark" ? "primary" : "light"}
                onClick={props.themeToggle}
              >
                {props.nowtheme}
              </StyButton>
            </Nav>
          </Navbar.Collapse>
        </div>
      </StyNavbar>
    </div>
  );
};
export default Header;
