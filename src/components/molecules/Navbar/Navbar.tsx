// /components/molecules/Navbar.tsx
import React from 'react';
import Icon from '../../atoms/Icon';
import { NavbarContainer, MenuItem, MenuText } from './Navbar.styles';

interface NavbarProps {
  // Your Navbar properties
}

const Navbar: React.FC<NavbarProps> = ({ /* Your Navbar properties here */ }) => {
  return (
    <NavbarContainer>
      <MenuItem className="active">
        <Icon />
        <MenuText>Home</MenuText>
      </MenuItem>
      <MenuItem>
        <Icon />
        <MenuText>Products</MenuText>
      </MenuItem>
      {/* Add more menu items as needed */}
    </NavbarContainer>
  );
};

export default Navbar;
