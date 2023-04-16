import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { FullCard } from './FullCard';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { photo } from '../../mocks/rest-handler';

describe('<FullCard />', () => {
  it('renders FullCard component', async () => {
    render(
      <Provider store={store}>
        <FullCard photo="9384913472983474982" onClick={() => {}} />
      </Provider>
    );

    await waitForElementToBeRemoved(() => screen.queryByRole('loading'));

    expect(screen.getByText(photo.title._content)).toBeInTheDocument();
    expect(screen.getByText(`Viewed: ${photo.views}`)).toBeInTheDocument();
    expect(screen.getByRole(`button`)).toBeInTheDocument();
  });
});
