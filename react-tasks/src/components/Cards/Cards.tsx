import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

import Spinner from '../Spinner/Spinner';

//const data: ICardProps[] = [];

export interface ICardsProps {
  cards: ICardProps[];
  isLoaded?: boolean;
  isError?: boolean;
}

//export default class Cards extends React.Component<ICardsProps> {
const Cards = (props: ICardsProps) => {
  if (!props.isError && (props.isLoaded === undefined || props.isLoaded)) {
    if (props.cards.length) {
      return (
        <div className="cards">
          {props.cards.map((item, index) => (
            <Card key={index.toString()} {...item} />
          ))}
        </div>
      );
    } else {
      return <div className="cards">No data to display. Try to change criteria</div>;
    }
  } else if (props.isError) {
    return <div className="cards">Error when download data</div>;
  } else {
    return <Spinner />;
  }
};

export { Cards };
