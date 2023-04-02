import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
  // it('renders Header component', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );
  //   screen.debug();
  // });
  it('test About is in document', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });
  it('test Home is in document', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
  // it('test click on Home', async () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );

  //   fireEvent.click(screen.getByText(/About/));

  //   const message = await screen.findByText(/My name is Nat./);

  //   expect(message).toBeInTheDocument();
  // });
});
