import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../assests/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} />

      <NavGroup>
        <NavLinkStyled to='/'>Home</NavLinkStyled>
        <NavLinkStyled to='/drugs'>Drugs</NavLinkStyled>
        <NavLinkStyled to='/deathrate'>Death Rate</NavLinkStyled>
        <NavLinkStyled to='/transformimage'>AI Image</NavLinkStyled>
      </NavGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin: 15px auto;
  padding: 0 120px;
  justify-content: space-between;
  align-items: center;
`;

const NavGroup = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #3D3D3D;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #4B4EFC;
  }

  &.active {
    color: #4B4EFC;
    text-decoration: underline;
  }
`;

export default Header;