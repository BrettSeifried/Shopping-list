import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Workout from './workout';

test('add button works', async () => {
  render(
    <MemoryRouter>
      <Workout />
    </MemoryRouter>
  );

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();

  const addButton = screen.getByRole('button', {
    name: /add to workout/i,
  });
  expect(addButton).toBeInTheDocument();

  userEvent.type(input, 'Bench');
  userEvent.click(addButton);

  const result = screen.getByText(/bench/i);
  expect(result).toBeInTheDocument();
});
