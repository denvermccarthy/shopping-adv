import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should be able to add, edit and delete a list of items', async () => {
  render(<App />);
  const textBox = screen.getByPlaceholderText('New Item');
  const addButton = screen.getByText(/add item/i);
  userEvent.type(textBox, 'Eggs');
  userEvent.click(addButton);
  const eggListItem = screen.getByText('Eggs');
  const editButton = screen.getByLabelText('Eggs Edit Button');
  userEvent.click(editButton);
  const input = screen.getByLabelText('edit Eggs');
  input.setSelectionRange(0, 0);
  userEvent.type(input, 'two ', {
    initialSelectionStart: 0,
    initialSelectionEnd: 0,
  });
  const save = screen.getByText('Save');
  userEvent.click(save);
  screen.getByText('two Eggs');
  const deleteTwoEggs = screen.getByLabelText('delete two Eggs');
  userEvent.click(deleteTwoEggs);
  const checkForEggs = screen.queryByText('two Eggs');
  expect(checkForEggs).toBeNull();
});
