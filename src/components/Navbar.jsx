import React from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";

const NavContainer = styled.div`
  height: ${(props) => props.theme.sizes.navHeight};
  width: 100vw;
  position: fixed;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled.div`
  height: 100%;
  width: 100%;
  padding-left: ${(props) => props.theme.sizes.xLarge};
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: ${(props) => props.theme.sizes.navHeight};
  width: auto;
  padding: ${(props) => props.theme.sizes.tiny};
`;

const LogoText = styled.h1`
  font-family: Merriweather;
  font-size: ${(props) => props.theme.fonts.xLarge};
  padding: ${(props) => props.theme.sizes.tiny};
`;

const NavItems = styled.ul`
  height: 100%;
  width: 100%;
  padding-right: ${(props) => props.theme.sizes.xLarge};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li`
  font-family: Merriweather;
  font-size: ${(props) => props.theme.fonts.medium};
  padding: ${(props) => props.theme.sizes.tiny};
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <LogoImg src={logo}></LogoImg>
        <LogoText>Black Grail Arms</LogoText>
      </NavLogo>
      <NavItems>
        <NavItem>Shop</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Info</NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
