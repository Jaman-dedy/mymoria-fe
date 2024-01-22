// components/atoms/NodataFound.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NodataFound from './index';

test('renders NoDataFound component', () => {
  render(<NodataFound />);

  // Check if the NoDataFound component is rendered
  const noDataIcon = screen.getByAltText('No data found');
  expect(noDataIcon).toBeInTheDocument();

  const noDataText = screen.getByText('No data found');
  expect(noDataText).toBeInTheDocument();
});
