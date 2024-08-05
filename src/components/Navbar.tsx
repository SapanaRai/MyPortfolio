import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  width: 250px;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const LogoText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavLink = styled.li`
  margin-bottom: 20px;

  a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px;

    &:hover {
      background-color: #444;
      border-radius: 5px;
    }
  }
`;

const Navbar: React.FC = () => {

  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="MyApp Logo" />
        <LogoText>Sapana Rai</LogoText>
      </LogoContainer>
      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link to="/services">Services</Link>
        </NavLink>
        <NavLink>
          <Link to="/contact">Contact</Link>
        </NavLink>
        <NavLink>
          <Link to="/profile">ContactList</Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
