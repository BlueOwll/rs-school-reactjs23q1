import Cards from './../../components/Cards/Cards';
import { useState } from 'react';
import './NewCard.css';
import NewCardForm from './../../components/NewCardForm/NewCardForm';
import { ICardProps } from 'components/Card/Card';

// class NewCard extends React.Component<Record<string, never>, INewCardState> {
const NewCard = () => {
  const [newCard, setNewCard] = useState<ICardProps | undefined>(undefined);

  const updateData = (value: ICardProps) => {
    console.log(value);
    setNewCard(value);
  };

  return (
    <div className="home">
      <NewCardForm updateData={updateData} />
      <Cards newCard={newCard} />
    </div>
  );
};

export default NewCard;
