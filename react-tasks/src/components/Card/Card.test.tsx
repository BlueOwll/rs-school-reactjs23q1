import { render, screen } from '@testing-library/react';

import { Card, ICardProps } from './Card';

const testCard: ICardProps = {
  imgPath: '/img/norvegskaya-3.jpg',
  title: 'Norwegian cat',
  descr: 'description',
  story: 'story',
};

describe('<Card />', () => {
  it('renders Card component', () => {
    render(<Card {...testCard} />);
    screen.debug();
  });
});
