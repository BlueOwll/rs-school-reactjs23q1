import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { ICardProps } from './../Card/Card';
import NewCardForm from './NewCardForm';

const testCard: ICardProps = {
  imgPath: '/img/norvegskaya-3.jpg',
  name: 'Vasya',
  breed: 'norvegskaya',
  gender: 'female',
  fromShelter: true,
};

describe('<NewCard Form />', () => {
  it('renders NewcardCard component', () => {
    const saveData = vi.fn();

    render(<NewCardForm updateData={saveData} />);

    expect(screen.getByRole('new-card-form')).toBeInTheDocument();
    expect(screen.getByText(`Name`)).toBeInTheDocument();
    expect(screen.getByText(`Breed`)).toBeInTheDocument();
    expect(screen.getByText(`Birthday`)).toBeInTheDocument();
    expect(screen.getByText(`gender`)).toBeInTheDocument();
    expect(screen.getByText('From shelter')).toBeInTheDocument();
    expect(screen.getByText('Upload file:')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  // it('handles the submit click', () => {
  //   const saveData = vi.fn();

  //   render(<NewCardForm updateData={saveData} />);

  //   fireEvent.change(screen.getByPlaceholderText('Name'), {
  //     target: { value: 'Ggggg' },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText('birthday'), {
  //     target: { value: '23-12-2023' },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText('file'), {
  //     target: { files: [1] },
  //   });

  //   fireEvent.click(screen.getByText('Submit'));

  //   expect(saveData).toHaveBeenCalledTimes(1);
  // });
});
