import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders initial items', async () => {
  render(<App />);

  const exercise = screen.getByText(/crunches/i);
  expect(exercise).toBeInTheDocument();

  const editButton = screen.getByTestId('edit-Burpee');
  expect(editButton).toBeInTheDocument();

  const removeButton = screen.getByTestId('remove-Burpee');
  expect(removeButton).toBeInTheDocument();
});
