import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarContainer, DropdownContainer, DropdownItem, MobileMenuIcon, NavBarContainer, NavItem, NavItemsContainer, UserAvatar } from './Navbar';


const NavBar: React.FC = () => {
  const userAvatarUrl = 'https://res.cloudinary.com/dvx8vwgk6/image/upload/v1705884637/pexels-erick-alfredo-sasi-5774802_a6e4tk.jpg';
  const navigate = useNavigate();

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Added for dropdown visibility

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClick = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticatedUser');
    setDropdownVisible(false);
    navigate('/login'); 
  }

  const handleCloseDropdown = () => {
    if(dropdownVisible){
      setDropdownVisible(false)
    }
  }

  return (
    <NavBarContainer onClick={handleCloseDropdown} mobileMenuVisible={mobileMenuVisible}>
      <NavItemsContainer mobileMenuVisible={mobileMenuVisible}>
        <NavItem onClick={() => handleClick('/')}>
          <FontAwesomeIcon icon={faShoppingCart} /> Products
        </NavItem>
        <NavItem onClick={() => handleClick('/wishlist')}>
          <FontAwesomeIcon icon={faHeart} /> Wishlist
        </NavItem>
      </NavItemsContainer>
      <AvatarContainer>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </MobileMenuIcon>
        <Avatar onClick={toggleDropdown}>
          <UserAvatar src={userAvatarUrl} alt="User Avatar" />
        </Avatar>
        {dropdownVisible && (
          <DropdownContainer>
            <DropdownItem>
              <FontAwesomeIcon icon={faUser} /> Profile
            </DropdownItem>
            <DropdownItem>
              <FontAwesomeIcon icon={faCog} /> Preferences
            </DropdownItem>
            <DropdownItem onClick={handleLogout} >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </DropdownItem>
          </DropdownContainer>
        )}
        {!userAvatarUrl && (
          <NavItem onClick={() => handleClick('/login')}>
            <FontAwesomeIcon icon={faUser} /> Login
          </NavItem>
        )}
      </AvatarContainer>
    </NavBarContainer>
  );
};

export default NavBar;
