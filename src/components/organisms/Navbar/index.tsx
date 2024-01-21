import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
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
    color:  #c2c7c6
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

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
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

const NavBar: React.FC = () => {
  const userAvatarUrl = 'https://via.placeholder.com/30';
  const navigate = useNavigate()

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleClick = (path:string) => {
    navigate(path)
  }

  return (
    <NavBarContainer mobileMenuVisible={mobileMenuVisible}>
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
        {/* replace with actual user authentication check */}
        {userAvatarUrl && (
          <Avatar>
            <UserAvatar src={userAvatarUrl} alt="User Avatar" />
          </Avatar>
        )}
        {/* replace with actual user authentication check */}
        {!userAvatarUrl && (
          <NavItem>
            <FontAwesomeIcon icon={faUser} /> Login
          </NavItem>
        )}
      </AvatarContainer>
    </NavBarContainer>
  );
};

export default NavBar;
