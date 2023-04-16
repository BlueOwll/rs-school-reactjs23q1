import { render, screen } from '@testing-library/react';
import NewCard from './NewCard';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('<New card />', () => {
  it('test new card is correctly rendered', () => {
    render(
      <Provider store={store}>
        <NewCard />
      </Provider>
    );
    expect(screen.getByRole('new-card-form')).toBeInTheDocument();
  });
});
