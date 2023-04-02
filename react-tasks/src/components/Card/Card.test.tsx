import { render, screen } from '@testing-library/react';

import { Card, ICardProps } from './Card';

const testCard: ICardProps = {
  imgPath: '/img/norvegskaya-3.jpg',
  name: 'Vasya',
  breed: 'norvegskaya',
  sex: 'female',
  fromShelter: true,
};

describe('<Card />', () => {
  it('renders Card component', () => {
    render(<Card {...testCard} />);
    expect(screen.getByText(testCard.name)).toBeInTheDocument();
    expect(screen.getByText(`Breed: ${testCard.breed}`)).toBeInTheDocument();
    expect(screen.getByText(`Sex: ${testCard.sex}`)).toBeInTheDocument();
    expect(screen.getByText('from shelter')).toBeInTheDocument();
    expect(screen.getByText(testCard.name)).toBeInTheDocument();
    //qscreen.debug();
  });
});
