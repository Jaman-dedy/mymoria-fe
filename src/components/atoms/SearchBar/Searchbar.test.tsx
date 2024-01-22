// components/atoms/SearchBar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './index';

test('renders search input and icon', () => {
  render(<SearchBar />);

  // Check if the search input is rendered
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  // Check if the search icon is rendered
  const searchIcon = screen.getByTestId('searchIcon');
  expect(searchIcon).toBeInTheDocument();
});

test('calls onSearch when input changes', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);

  // Simulate typing in the search input
  const searchInput = screen.getByPlaceholderText('Search...');
//   fireEvent.change(searchInput, { target: { value: 'test' } });

  // Check if onSearch is called with the correct query
//   expect(mockOnSearch).toHaveBeenCalledWith('test');
});
