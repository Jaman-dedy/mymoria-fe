// src/Select/CategorySelect.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategorySelect from './index';

test('renders category options', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const onChange = jest.fn();

  render(<CategorySelect categories={categories} onChange={onChange} />);

  categories.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test('calls onChange when a category is selected', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const onChange = jest.fn();

  render(<CategorySelect categories={categories} onChange={onChange} />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Category 2' } });

  expect(onChange).toHaveBeenCalledWith('Category 2');
});
