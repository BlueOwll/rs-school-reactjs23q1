import { render, screen } from '@testing-library/react';

import { Card, ICardProps } from './Card';

const testCard: ICardProps = {
  imgPath: '/img/norvegskaya-3.jpg',
  title: 'Vasya',
  breed: 'norvegskaya',
  gender: 'female',
  fromShelter: true,
  id: 'adjfadfj',
};

describe('<Card />', () => {
  it('renders Card component', () => {
    render(<Card {...testCard} />);
    expect(screen.getByText(testCard.title)).toBeInTheDocument();
    expect(screen.getByText(`Breed: ${testCard.breed}`)).toBeInTheDocument();
    expect(screen.getByText(`gender: ${testCard.gender}`)).toBeInTheDocument();
    expect(screen.getByText('from shelter')).toBeInTheDocument();
  });
});
