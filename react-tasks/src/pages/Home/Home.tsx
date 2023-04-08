import { Cards, ICardsProps } from './../../components/Cards/Cards';
import React, { useState } from 'react';
import Search from './../../components/Search/Search';
import './Home.css';
import { ICardProps } from '../../components/Card/Card';

const Home = () => {
  const [cards, setCards] = useState<ICardProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const updateData = (result: ICardsProps) => {
    console.log(result);
    if (result.isError) {
      setIsError(true);
      setCards([]);
      setIsLoaded(false);
    } else if (!result.isLoaded) {
      setIsError(false);
      setCards([]);
      setIsLoaded(false);
    } else {
      setIsError(false);
      setCards(result.cards);
      setIsLoaded(true);
    }
  };

  return (
    <div className="home">
      <Search updateData={updateData} />
      <Cards cards={cards} isLoaded={isLoaded} isError={isError} />
    </div>
  );
};

export default Home;
