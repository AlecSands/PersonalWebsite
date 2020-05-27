import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('container div', () => {
  const { getByText } = render(<App />);
  const divElement = getByText(/Header/i);
  expect(divElement).toBeInTheDocument();
});
