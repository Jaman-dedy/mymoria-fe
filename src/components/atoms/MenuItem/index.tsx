// components/atoms/MenuItem.tsx
import React from 'react';
import { MenuItemContainer, MenuItemProps } from './MenuItemStyles';

const MenuItem: React.FC<MenuItemProps> = ({ children, active }) => {
  return <MenuItemContainer active={active}>{children}</MenuItemContainer>;
};

export default MenuItem;
