/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { getMany, getRecent } from '../Api/Api';
import { ICardsProps } from '../Cards/Cards';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { update } from './SearchSlice';

const keyText = 'inputText';

interface ISearchProps {
  updateData: (result: ICardsProps) => void;
}

const getDataFromApi = (searchText: string) => {
  if (searchText !== '') {
    return getMany({ text: searchText }).catch((e) => {
      throw new Error(e.message);
    });
  } else {
    return getRecent().catch((e) => {
      throw new Error(e.message);
    });
  }
};

const Search = (props: ISearchProps) => {
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const dispatch = useDispatch();
  const [inputSearchText, setInputSearchText] = useState(searchText);

  useEffect(() => {
    requestDataFromApi(inputSearchText);
  }, []);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputSearchText(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(update(inputSearchText));
    requestDataFromApi(inputSearchText);
  };

  const requestDataFromApi = (text: string) => {
    getDataFromApi(text)
      .then((res) => {
        props.updateData({ isLoaded: true, isError: false, cards: res });
      })
      .catch(() => {
        props.updateData({ isLoaded: true, isError: true, cards: [] });
      });
  };

  return (
    <div className="search">
      <form className="search__wrapper" role="new-card-form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search__input"
          value={inputSearchText}
          onChange={handleSearchChange}
        />
        <input className="search__button" type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default Search;
