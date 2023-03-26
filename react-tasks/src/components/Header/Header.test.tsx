import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.debug();
  });
  it('test About is in document', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });
});
