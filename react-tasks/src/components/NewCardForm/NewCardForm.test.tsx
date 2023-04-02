import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { ICardProps } from './../Card/Card';
import NewCardForm from './NewCardForm';

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
});
