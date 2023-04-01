import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

import data from './cards-data';

//const data: ICardProps[] = [];

interface ICardsProps {
  newCard?: ICardProps;
}

//export default class Cards extends React.Component<ICardsProps> {
const Cards = (props: ICardsProps) => {
  if (props.newCard) data.push(props.newCard);
  // console.log(data);

  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card key={index.toString()} {...item} />
      ))}
    </div>
  );
};

export default Cards;
