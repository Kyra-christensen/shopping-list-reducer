import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
  });

  it('should add an item on add button click', async () => {
    const addInput = screen.getByPlaceholderText('New Item');
    userEvent.type(addInput, 'tomato');

    const addButton = await screen.findByLabelText('add item');

    userEvent.click(addButton);

    const listItem = await screen.findByRole('list-item');

    expect(listItem).toHaveTextContent('tomato', { exact: false });
});


})