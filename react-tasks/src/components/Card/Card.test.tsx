import { render, screen } from '@testing-library/react';

import { Card, ICardProps } from './Card';

const testCard: ICardProps = {
  imgPath: '/img/norvegskaya-3.jpg',
  name: 'Vasya',
  breed: 'norvegskaya',
  sex: 'female',
  fromShelter: false,
};

describe('<Card />', () => {
  it('renders Card component', () => {
    render(<Card {...testCard} />);
    screen.debug();
  });
});
