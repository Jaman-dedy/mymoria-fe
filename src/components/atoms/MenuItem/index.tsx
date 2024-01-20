// components/atoms/MenuItem.tsx
import React from 'react';
import styled from 'styled-components';

interface MenuItemProps {
  active?: boolean;
  children: any;
}

const MenuItemContainer = styled.div<MenuItemProps>`
  color: ${(props) => (props.active ? '#01A76F' : '#677784')};
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8ecee;
  }
`;

const MenuItem: React.FC<MenuItemProps> = ({ children, active }) => {
  return <MenuItemContainer active={active}>{children}</MenuItemContainer>;
};

export default MenuItem;
