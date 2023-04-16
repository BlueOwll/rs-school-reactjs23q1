/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { update } from './SearchSlice';

const Search = () => {
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const dispatch = useDispatch();
  const [inputSearchText, setInputSearchText] = useState(searchText);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputSearchText(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(update(inputSearchText));
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
