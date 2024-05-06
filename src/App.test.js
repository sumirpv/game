// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// Import necessary testing utilities and the components to test
import { render, screen, fireEvent } from '@testing-library/react';
import Square from './Square';
import Board from './Board';

// Test for Square component
test('renders Square component with value', () => {
  const onSquareClick = jest.fn(); // Mock function for onClick
  render(<Square value="X" onSquareClick={onSquareClick} />);
  const squareButton = screen.getByText('X');
  expect(squareButton).toBeInTheDocument();
});

// Test for Board component
test('renders Board component with squares', () => {
  const squares = Array(9).fill(null);
  const onPlay = jest.fn(); // Mock function for onPlay
  render(<Board xIsNext={true} squares={squares} onPlay={onPlay} />);
  const board = screen.getByTestId('board'); // Assuming you have a test ID for the board
  expect(board).toBeInTheDocument();
});

// Test for user interaction in Board component
test('calls onPlay when a square is clicked', () => {
  const squares = Array(9).fill(null);
  const onPlay = jest.fn(); // Mock function for onPlay
  render(<Board xIsNext={true} squares={squares} onPlay={onPlay} />);
  const squareButton = screen.getByTestId('square-0'); // Assuming you have a test ID for squares
  fireEvent.click(squareButton);
  expect(onPlay).toHaveBeenCalledTimes(1);
});
