import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

// import data from './cards-data';

const data: ICardProps[] = [];

interface ICardsProps {
  newCard?: ICardProps;
}

export default class Cards extends React.Component<ICardsProps> {
  constructor(props: ICardsProps) {
    super(props);
    if (props.newCard) data.push(props.newCard);
    // console.log(data);
  }
  render() {
    if (this.props.newCard) data.push(this.props.newCard);
    console.log(data);
    return (
      <div className="cards">
        {data.map((item, index) => (
          <Card key={index.toString()} {...item} />
        ))}
      </div>
    );
  }
}
