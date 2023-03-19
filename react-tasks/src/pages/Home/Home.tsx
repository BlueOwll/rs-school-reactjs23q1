import Cards from './../../components/Cards/Cards';
import React from 'react';
import Search from './../../components/Search/Search';
// import './AboutUs.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Main page</h1>
        <Search />
        <Cards />
      </>
    );
  }
}

export default Home;
