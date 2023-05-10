import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('It shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it call onUserAdd when the form is submitted', async () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('Tomek');
  user.click(emailInput);
  user.keyboard('tomek@rychtyk.pl');
  user.click(button);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'Tomek',
    email: 'tomek@rychtyk.pl',
  });
});
