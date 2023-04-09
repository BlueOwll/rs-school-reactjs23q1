import { Cards } from './../../components/Cards/Cards';
import { useState } from 'react';
import './NewCard.css';
import NewCardForm from './../../components/NewCardForm/NewCardForm';
import { ICardProps } from 'components/Card/Card';

const cards: ICardProps[] = [];

const NewCard = () => {
  const [cards, setCards] = useState<ICardProps[]>([]);

  const updateData = (value: ICardProps) => {
    setCards([...cards, value]);
  };

  return (
    <div className="home">
      <NewCardForm updateData={updateData} />
      <Cards cards={cards} />
    </div>
  );
};

export default NewCard;
