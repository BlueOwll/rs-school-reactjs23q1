import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('test Not found page is correctly rendered', () => {
    render(<NotFound />);
    expect(screen.getByText(/page not found/)).toBeInTheDocument();
  });
});
