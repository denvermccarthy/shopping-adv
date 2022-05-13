import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should be able to add, edit and delete a list of items', () => {
  render(<App />);
  const textBox = screen.getByPlaceholderText('New Item');
  const addButton = screen.getByText(/add item/i);
  userEvent.type(textBox, 'Eggs');
  userEvent.click(addButton);
  const eggListItem = screen.getByText('Eggs');
  const editButton = screen.getByLabelText('Eggs Edit Button');
  userEvent.click(editButton);
});
