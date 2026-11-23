import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('filters courses by search text', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText(/otsi kursusi/i), 'React');

  expect(screen.getAllByText('Reacti sissejuhatus').length).toBeGreaterThan(0);
  expect(screen.queryByText('Kasutajaliidese kujundamine')).toBeNull();
});

test('filters courses by category', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: 'Disain' }));

  expect(screen.getAllByText('Kasutajaliidese kujundamine').length).toBeGreaterThan(0);
  expect(screen.getByRole('button', { name: 'Disain' }).getAttribute('aria-pressed')).toBe('true');
});

test('toggles a favorite and updates the header count', async () => {
  const user = userEvent.setup();
  render(<App />);

  const favoriteButtons = screen.getAllByRole('button', { name: 'Lisa lemmikuks' });
  await user.click(favoriteButtons[0]);

  expect(screen.getByLabelText('Lemmikkursuste arv').textContent).toContain('1');
  expect(screen.getAllByRole('button', { name: 'Eemalda lemmikute hulgast' }).length).toBeGreaterThan(0);
});
