import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render the correct number of rows', () => {
  const users = [
    {
      name: 'Tomek',
      email: 'tomek@example.pl',
    },
    {
      name: 'Gosia',
      email: 'gosia@example.pl',
    },
  ];
  render(<UserList users={users} />);

  const rows = screen.getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {});
