import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

export interface ICardsProps {
  cards?: ICardProps[];
  isLoading?: boolean;
  isError?: boolean;
}

const Cards = (props: ICardsProps) => {
  return (
    <>
      {!!props.cards?.length && (
        <div className="cards">
          {props.cards.map((item, index) => (
            <Card key={index.toString()} {...item} />
          ))}
        </div>
      )}
      {!props.cards?.length && <div className="cards">No data to display</div>}
    </>
  );
};

export { Cards };
