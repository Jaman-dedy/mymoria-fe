import styled from 'styled-components';

export const NavBarContainer = styled.div<{ mobileMenuVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 34px;
  background-color: #fff;
  height: 55px;
  color: #0D0C22;
  font-weight: 500;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavItemsContainer = styled.div<{ mobileMenuVisible: boolean }>`
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
    background-color: #fff;
    padding: 10px 20px;
    z-index: 1;
  }
`;

export const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
    cursor: pointer;
  }

  &:hover {
    color: #414242;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const LogoImgContainer = styled.div`
width: 200px;
height: 200px;
&:hover {
    cursor: pointer;
  }
`
export const LogoImg = styled.img`
width: 100%;
`

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  cursor: pointer;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 125px;
  background-color: #fff;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  color: #0D0C22;
  margin-bottom: 15px;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #414242;
  }
`;