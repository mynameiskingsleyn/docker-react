import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders intro statement', () => {
  render(<App />);
  const introElement = screen.getByText(/and save./i);
  expect(introElement).toBeInTheDocument();
});
