// /components/molecules/Navbar.styles.ts
import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const NavbarContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: ${colors.hoverColor};
  }

  &.active {
    color: ${colors.hoverColor};
  }
`;

export const MenuText = styled.span`
  color: ${colors.menuText};
  margin-left: 5px;
`;
