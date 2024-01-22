import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBarContainer = styled.div<{ mobileMenuVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 34px;
  background-color: #01a76f;
  height: 55px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItemsContainer = styled.div<{ mobileMenuVisible: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.mobileMenuVisible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #01a76f;
    padding: 10px 20px;
    z-index: 1;
  }
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #c2c7c6;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative; /* Added for positioning the dropdown */

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  cursor: pointer;
`;

const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 50px; /* Adjust the distance from the avatar */
  right: 0;
  background-color: #01a76f;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  color: #fff;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #c2c7c6;
  }
`;

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
