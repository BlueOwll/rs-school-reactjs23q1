import React from 'react';
import { Card, ICardProps } from '../Card/Card';
import './cards.css';

import Spinner from '../Spinner/Spinner';

export interface ICardsProps {
  cards?: ICardProps[];
  isLoading?: boolean;
  isError?: boolean;
}

const Cards = (props: ICardsProps) => {
  return (
    <>
      {props.isLoading && <Spinner />}
      {props.cards && (
        <div className="cards">
          {props.cards.map((item, index) => (
            <Card key={index.toString()} {...item} />
          ))}
        </div>
      )}
      {props.isError && <div className="cards">Error when download data</div>}
    </>
  );
};

export { Cards };
