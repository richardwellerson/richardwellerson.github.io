import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Hash game tests', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("Hash Game");
    expect(linkElement).toBeDefined();
  });
});
