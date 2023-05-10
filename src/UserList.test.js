import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
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

  return {
    users,
  };
}

test('render the correct number of rows', () => {
  //   const users = [
  //     {
  //       name: 'Tomek',
  //       email: 'tomek@example.pl',
  //     },
  //     {
  //       name: 'Gosia',
  //       email: 'gosia@example.pl',
  //     },
  //   ];
  // const { container } = render(<UserList users={users} />);
  //   // eslint-disable-next-line
  //   const rows = container.querySelectorAll('tbody tr');

  renderComponent();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
