// components/atoms/SearchBar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './index';

test('renders search input and icon', () => {
  render(<SearchBar />);

  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  const searchIcon = screen.getByTestId('searchIcon');
  expect(searchIcon).toBeInTheDocument();
});

test('calls onSearch when input changes', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);

});
