// components/atoms/MenuItem.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItem from './index';

test('renders menu item with correct styling', () => {
  render(<MenuItem active={true}>Menu Item</MenuItem>);

  const menuItem = screen.getByText('Menu Item');
  expect(menuItem).toBeInTheDocument();
  expect(menuItem).toHaveStyle({ color: '#01A76F' });
});

test('renders menu item with default styling', () => {
  render(<MenuItem active={false}>Menu Item</MenuItem>);

  const menuItem = screen.getByText('Menu Item');
  expect(menuItem).toBeInTheDocument();
  expect(menuItem).toHaveStyle({ color: '#677784' });
});
