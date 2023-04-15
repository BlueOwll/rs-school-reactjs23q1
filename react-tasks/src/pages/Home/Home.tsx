import { Cards, ICardsProps } from './../../components/Cards/Cards';
import React, { useState } from 'react';
import Search from './../../components/Search/Search';
import './Home.css';
import { ICardProps } from '../../components/Card/Card';
import { useGetManyQuery } from '../../components/Api/FlickrApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home = () => {
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const {
    data: cards,
    isLoading,
    isError,
  } = useGetManyQuery({ text: searchText !== '' ? searchText : 'react' });

  return (
    <div className="home">
      <Search />
      <Cards cards={cards} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Home;
