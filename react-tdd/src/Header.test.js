import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('header html element', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Header/i);
  expect(headerElement).toBeInTheDocument();
});
