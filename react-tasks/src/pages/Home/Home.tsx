import Cards from './../../components/Cards/Cards';
import React from 'react';
import Search from './../../components/Search/Search';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Search />
        <Cards />
      </div>
    );
  }
}

export default Home;
