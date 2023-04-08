import { Cards } from './../../components/Cards/Cards';
import { useState } from 'react';
import './NewCard.css';
import NewCardForm from './../../components/NewCardForm/NewCardForm';
import { ICardProps } from 'components/Card/Card';

const cards: ICardProps[] = [];

// class NewCard extends React.Component<Record<string, never>, INewCardState> {
const NewCard = () => {
  const [cards, setCards] = useState<ICardProps[]>([]);

  const updateData = (value: ICardProps) => {
    console.log(value);
    setCards([...cards, value]);
    // console.log(data);
  };

  return (
    <div className="home">
      <NewCardForm updateData={updateData} />
      <Cards cards={cards} />
    </div>
  );
};

export default NewCard;
