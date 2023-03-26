import Cards from './../../components/Cards/Cards';
import React from 'react';
import './NewCard.css';
import NewCardForm from './../../components/NewCardForm/NewCardForm';
import { ICardProps } from 'components/Card/Card';

interface INewCardState {
  newCard?: ICardProps;
}

class NewCard extends React.Component<Record<string, never>, INewCardState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      newCard: undefined,
    };
  }

  updateData = (value: ICardProps) => {
    console.log(value);
    this.setState({ newCard: value });
  };

  render() {
    return (
      <div className="home">
        <NewCardForm updateData={this.updateData} />
        <Cards newCard={this.state.newCard} />
      </div>
    );
  }
}

export default NewCard;
