import { render, screen, within } from '@testing-library/react';
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

test('edit button works', async () => {
  render(
    <MemoryRouter>
      <Workout />
    </MemoryRouter>
  );

  const editButton = screen.getByTestId('edit-Burpee');
  expect(editButton).toBeInTheDocument();

  userEvent.click(editButton);

  const list = screen.getByRole('list');
  const inputEdit = within(list).getByRole('textbox');
  userEvent.type(inputEdit, 'Push Up');

  const saveButton = screen.getByRole('button', {
    name: /save/i,
  });
  expect(saveButton).toBeInTheDocument();

  userEvent.click(saveButton);

  const pushUp = await screen.findByText(/push up/i);
  expect(pushUp).toBeInTheDocument();
});

test('delete button works', async () => {
  render(
    <MemoryRouter>
      <Workout />
    </MemoryRouter>
  );

  const exercise = screen.getByText(/burpee/i);
  const removeButton = await screen.findByTestId('remove-Burpee');
  expect(removeButton).toBeInTheDocument();

  userEvent.click(removeButton);

  expect(exercise).not.toBeInTheDocument();
});
