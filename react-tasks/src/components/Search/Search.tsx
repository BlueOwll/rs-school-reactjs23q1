import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { getData } from '../Api/Api';
import { ICardsProps } from '../Cards/Cards';
import './Search.css';

const keyText = 'inputText';

interface ISearchProps {
  updateData: (result: ICardsProps) => void;
}

const getDataFromApi = (searchText: string) => {
  return getData({ text: searchText }).catch((e) => {
    throw new Error(e.message);
  });
};

const Search = (props: ISearchProps) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const text = localStorage.getItem(keyText) || '';
    localStorage.removeItem(keyText);
    setSearchText(text);
    requestDataFromApi(text);
  }, []);

  useEffect(() => {
    return localStorage.setItem(keyText, searchText);
  }, [searchText]);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    requestDataFromApi(searchText);
  };

  const requestDataFromApi = (text: string) => {
    if (text === '') {
      props.updateData({ isLoaded: true, isError: false, cards: [] });
      return;
    }
    getDataFromApi(text)
      .then((res) => {
        props.updateData({ isLoaded: true, isError: false, cards: res });
      })
      .catch((e) => {
        console.log(e.message);
        props.updateData({ isLoaded: true, isError: true, cards: [] });
      });
  };

  return (
    <div className="search">
      <form className="search__wrapper" role="new-card-form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search__input"
          value={searchText}
          onChange={handleSearchChange}
        />
        <input className="search__button" type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default Search;
