import { render, screen } from '@testing-library/react';
import App from './App';

test('renders placeholder element', () => {
  render(<App />);
  const placeholderElement = screen.getByText(/APP/i);
  expect(placeholderElement).toBeInTheDocument();
});
