import { render, screen } from '@testing-library/react';

import NewCardForm from './NewCardForm';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('<NewCard Form />', () => {
  it('renders NewcardCard component', () => {
    render(
      <Provider store={store}>
        <NewCardForm />
      </Provider>
    );

    expect(screen.getByRole('new-card-form')).toBeInTheDocument();
    expect(screen.getByText(`Name`)).toBeInTheDocument();
    expect(screen.getByText(`Breed`)).toBeInTheDocument();
    expect(screen.getByText(`Birthday`)).toBeInTheDocument();
    expect(screen.getByText(`gender`)).toBeInTheDocument();
    expect(screen.getByText('From shelter')).toBeInTheDocument();
    expect(screen.getByText('Upload file:')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
