import { render, screen } from '@testing-library/react';

import About from './About';

describe('<About />', () => {
  it('test About is correctly rendered', () => {
    render(<About />);
    expect(screen.getByText(/My name is Nat./)).toBeInTheDocument();
  });
});
