import { render, screen } from '@testing-library/react';
import NewCard from './NewCard';

describe('<New card />', () => {
  it('test new card is correctly rendered', () => {
    render(<NewCard />);
    expect(screen.getByRole('new-card-form')).toBeInTheDocument();
  });
});
