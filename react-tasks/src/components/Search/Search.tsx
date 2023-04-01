import React, { ChangeEvent, useEffect, useState } from 'react';
import './Search.css';

const keyText = 'inputText';

const Search = () => {
  const [searchText, setSearchText] = useState('yy');

  useEffect(() => {
    console.log('useeffect');
    const text = localStorage.getItem(keyText) || 'zz';
    setSearchText(text);
    console.log('useeffect' + text);
  }, []);

  useEffect(() => {
    localStorage.setItem(keyText, searchText);
  }, [searchText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`setState ${e.target.value}`);
    setSearchText(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input type="search" className="search__input" value={searchText} onChange={handleChange} />
        <p>{searchText}</p>
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

export default Search;
