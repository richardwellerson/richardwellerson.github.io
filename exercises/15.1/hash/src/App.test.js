import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Hash game tests', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const title = getByText("Hash Game");
    expect(title).toBeDefined();
  });
  test('The tic-tac-toe matrix is ​​empty', () => {
    const { getAllByTestId } = render(<App />);
    const allCells = getAllByTestId(/hashValue/i)
    allCells.map(cell => {
      expect(cell.innerHTML).toBe('');
    });
  });
});
