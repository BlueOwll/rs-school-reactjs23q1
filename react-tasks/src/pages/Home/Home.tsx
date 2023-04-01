import Cards from './../../components/Cards/Cards';
import React from 'react';
import Search from './../../components/Search/Search';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Search />
      <Cards />
    </div>
  );
};

export default Home;
